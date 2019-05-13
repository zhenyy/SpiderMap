<template>
  <div class="App"/>
</template>

<script>
import gmapsInit from './utils/gmaps'
import firebase from 'firebase'

export default {
  /* eslint-disable */
  name: 'App',
  data () {
    return {
      locations: [],
      names: [],
      map: null
    }
  },

  methods: {
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
    locations: function (val, oldVal) {
      var map = this.map
      const urlPrefix = 'https://maps.google.com/mapfiles/ms/icons/'
      const urlSuffix = '-dot.png'
      const nameToUrl = {
        'Funnel web spider': 'blue',
        'Garden Orb Weaver Spider': 'green',
        'Redback Spider': 'pink',
        'Tarantula Spider': 'yellow',
        'White-Tailed Spider': 'purple',
        'Daddy Long Legs Spider': 'white',
        'Huntsman Spider': 'black',
        'Red Headed Mouse Spider': 'red',
        'St Andrew\'s Cross Spider': 'orange'
      }
      for (var i = 0; i < this.locations.length; i++) {
        var url = urlPrefix + nameToUrl[this.names[i].name] + urlSuffix
        var marker = new google.maps.Marker({
          position: this.locations[i].position,
          map: map,
          icon: {
            url: url
          }
        })
        var infoWindow = new google.maps.InfoWindow({
          content: this.names[i].name
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
    var vm = this
    try {
      var ref = firebase.database().ref()
      ref.on('value', function (snapshot) {
        vm.storeSpidersInfo(snapshot.val().SpiderWithLocation)
      }, function (error) {
        console.log('Error: ' + error.code)
      })

      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      geocoder.geocode({address: 'Melbourne, Australia'}, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
        vm.map = map
      })
    } catch (error) {
      console.error(error)
    }
  }

}

// To add the marker to the map, call setMap();

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
