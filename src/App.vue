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
              lng: parseFloat(spidersInfo[property].SpiderLng),
            }
        })
        this.names.push({
          name: spidersInfo[property].SpiderName,
        })
      }
    }
  },

  watch: {
    locations: function (val, oldVal) {
      var map = this.map
      var myurl = null
      for (var i=0;i<this.locations.length;i++)
            {

            if(this.names[i].name === 'Funnel web spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
            else if(this.names[i].name === 'Garden Orb Weaver Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            }
            else if(this.names[i].name === 'Redback Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
            }
            else if(this.names[i].name === 'Tarantula Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            }
            else if(this.names[i].name === 'White-Tailed Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
            }
            else if(this.names[i].name === 'Daddy Long Legs Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/white-dot.png"
            }
            else if(this.names[i].name === 'Huntsman Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/black-dot.png"
            }
            else if(this.names[i].name === 'Red Headed Mouse Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }
            else if(this.names[i].name === 'St Andrew\'s Cross Spider'){
                var myurl = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
            }
                var marker = new google.maps.Marker({
                position: this.locations[i].position,
                map: map,
                title: this.names[i].name,
                icon: {
                     url: myurl
                    }
                });
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
