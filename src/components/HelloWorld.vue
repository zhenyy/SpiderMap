<!--<template>-->
  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Find and avoid poison spiders around you</h2>-->
    <!--&lt;!&ndash;<iframe :src="url" allowfullscreen frameborder="0" height="600" style="border:0"&ndash;&gt;-->
            <!--&lt;!&ndash;width="100%"></iframe>&ndash;&gt;-->
    <!--<div class="mapdiv">-->
      <!--<div id="allmap"></div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import google from 'google'-->
<!--export default {-->
  <!--name: 'HelloWorld',-->
  <!--data () {-->
    <!--return {-->
      <!--ptcenter: null,-->
      <!--map: null,-->
      <!--msg: 'Welcome to Spider Map',-->
      <!--url: 'https://www.google.com/maps/embed/v1/place?q=galadaave&key=AIzaSyB-SIJYfJGdNlZdLpr1oTGWZckcIV9wxgo'-->
    <!--}-->
  <!--},-->
  <!--mounted: function () {-->
    <!--this.ptcenter = {-->
      <!--lat: 38.281616,-->
      <!--lng: 175.026542-->
    <!--}-->
    <!--this.map = new google.maps.Map(document.getElementById('allmap'), {-->
      <!--center: this.ptcenter,-->
      <!--zoom: 3,-->
      <!--mapTypeId: google.maps.MapTypeId.ROADMAP-->
    <!--})-->
    <!--this.ptstart = {-->
      <!--lat: 29.860346,-->
      <!--lng: 121.632576-->
    <!--}-->
    <!--var markerStart = new google.maps.Marker({-->
      <!--position: this.ptstart-->
    <!--})-->
    <!--markerStart.setMap(this.map)-->
  <!--}-->

<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
<!--h1, h2 {-->
  <!--font-weight: normal;-->
<!--}-->
<!--ul {-->
  <!--list-style-type: none;-->
  <!--padding: 0;-->
<!--}-->
<!--li {-->
  <!--display: inline-block;-->
  <!--margin: 0 10px;-->
<!--}-->
<!--a {-->
  <!--color: #42b983;-->
<!--}-->
<!--</style>-->
<template>
  <div class="App"/>
</template>

<script>
import gmapsInit from '../utils/gmaps'

export default {
  name: 'App',
  async mounted () {
    try {
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      geocoder.geocode({ address: 'Australia' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }

        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
      })
    } catch (error) {
      console.error(error)
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
