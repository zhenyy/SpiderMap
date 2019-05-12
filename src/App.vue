<template>
  <div class="App"/>
</template>

<script>
import gmapsInit from './utils/gmaps'
import firebase from 'firebase'

export default {
  name: 'App',
  data () {
    return {
      locations: [
        {
          position: {
            lat: -25.363882,
            lng: 131.044922,
          }
        }
      ],
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
              lng: parseFloat(spidersInfo[property].SpiderLng),
            }
        })
      }
    }
  },

  watch: {
    locations: function (val, oldVal) {
      var map = this.map
      var markers = this.locations.map(x => new google.maps.Marker({...x, map, title: 'hello'}))
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
