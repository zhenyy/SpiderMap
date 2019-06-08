<template>
  <div class="App"/>
</template>

<script>
import gmapsInit from './utils/gmaps'
import firebase from 'firebase'
import global from './assets/Global'

export default {
  /* eslint-disable */
  name: 'App',
  /**
   * locations: an array of objects storing data of latitude and longitude
   * names: an array storing names of spiders
   * map: the google map object
   */
  data () {
    return {
      locations: [],
      names: [],
      map: null
    }
  },

  methods: {
    /**
     * Once receive data, rebuild the data structure
     * and store them in names and locations respectively
     */
    storeSpidersInfo (spidersInfo) {
      for (var property in spidersInfo) {
        this.locations.push({
          position:
            {
              lat: parseFloat(spidersInfo[property].SpiderLat),
              lng: parseFloat(spidersInfo[property].SpiderLng)
            }
        })
        this.names.push({
          name: spidersInfo[property].SpiderName
        })
      }
    }
  },

  watch: {
    /**
     * Listen if this.locations is changed
     * If changed, that means we received data from Firebase
     * Then we add marks on the map, with icons and infoWindows
     */
    locations: function (val, oldVal) {
      var map = this.map
      for (var i = 0; i < this.locations.length; i++) {
        var url = global.spiderType[this.names[i].name].url
        var marker = new google.maps.Marker({
          position: this.locations[i].position,
          map: map,
          icon: {
            url: url // the url for icon image
          }
        })
        /**
         * Each content follows the structure " Funnel-Web Spider:  Deadly & Dangerous "
         * Then each infoWindow is attached to relative marker, triggered by click action
         */
        var infoWindow = new google.maps.InfoWindow({
          content: this.names[i].name + ': ' + global.spiderType[this.names[i].name].poisonLvl
        });
        google.maps.event.addListener(marker, 'click', (function(marker, infoWindow) {
          return function() {
            infoWindow.open(map, marker);
          }
        })(marker, infoWindow));
      }
    }
  },

  async mounted () {
    /**
     * This method is asynchronous since Firebase API is asynchronous
     * Firebase will override 'this' so we take 'vm' as an alternative
     */
    var vm = this
    try {
      // create a reference of firebase
      var ref = firebase.database().ref()

      // retrieve data from firebase
      ref.on('value', function (snapshot) {
        // when successfully receiving data, call another function to store it
        vm.storeSpidersInfo(snapshot.val().SpiderWithLocation)
      }, function (error) {
        // print out the error code
        console.log('Error: ' + error.code)
      })

      // create google maps and geocoder
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      // initiate geocoder to show Melbourne as initial location
      geocoder.geocode({address: 'Melbourne, Australia'}, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
        vm.map = map
      })
    } catch (error) {
      // print out the error code
      console.error('Error: ' + error.code)
    }
  }

}

</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .App {
    width: 100vw;
    height: 100vh;
  }
</style>
