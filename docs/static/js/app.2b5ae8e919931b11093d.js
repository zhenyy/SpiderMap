webpackJsonp([1],{FQtB:function(e,o){},NHnr:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n("7+uW"),s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),p=n("//Fk"),l=n.n(p),c="AIzaSyAVES9cLOzyLcMkOM2UsdlHuLhs2gcLhEI",d="gmapsCallback",m=!!window.google,u=void 0,g=void 0,f=new l.a(function(e,o){u=e,g=o});function h(){if(m)return f;m=!0,window[d]=function(){return u(window.google)};var e=document.createElement("script");return e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key="+c+"&callback="+d,e.onerror=g,document.querySelector("head").appendChild(e),f}var v=n("kxiW"),w=n.n(v),L={spiderType:{"Funnel-Web Spider":{url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",poisonLvl:"1"},"Garden Orb Weaver Spider":{url:"https://maps.google.com/mapfiles/ms/icons/green-dot.png",poisonLvl:"1"},"Redback Spider":{url:"https://maps.google.com/mapfiles/ms/icons/pink-dot.png",poisonLvl:"1"},"Tarantula Spider":{url:"https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",poisonLvl:"1"},"White-Tailed Spider":{url:"https://maps.google.com/mapfiles/ms/icons/purple-dot.png",poisonLvl:"1"},"Daddy Long Legs Spider":{url:"https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",poisonLvl:"1"},"Huntsman Spider":{url:"https://maps.google.com/mapfiles/ms/icons/orange-dot.png",poisonLvl:"1"},"Red-Headed Mouse Spider":{url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png",poisonLvl:"1"},"St Andrews Cross Spider":{url:"https://firebasestorage.googleapis.com/v0/b/spider-location-storage-center.appspot.com/o/brown.png?alt=media&token=fd967824-dfce-468c-85a7-9f031e9c84d6",poisonLvl:"1"}}},S=n("VU/8")(L,null,!1,null,null,null).exports,b={name:"App",data:function(){return{locations:[],names:[],map:null}},methods:{storeSpidersInfo:function(e){for(var o in e)this.locations.push({position:{lat:parseFloat(e[o].SpiderLat),lng:parseFloat(e[o].SpiderLng)}}),this.names.push({name:e[o].SpiderName})}},watch:{locations:function(e,o){for(var n=this.map,t=0;t<this.locations.length;t++){var s=S.spiderType[this.names[t].name].url,a=new google.maps.Marker({position:this.locations[t].position,map:n,icon:{url:s}}),r=new google.maps.InfoWindow({content:S.spiderType[this.names[t].name].poisonLvl+" "+this.names[t].name});google.maps.event.addListener(a,"click",function(e,o){return function(){o.open(n,e)}}(a,r))}}},mounted:function(){var e=this;return i()(a.a.mark(function o(){var n,t,s,r;return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=e,o.prev=1,w.a.database().ref().on("value",function(e){n.storeSpidersInfo(e.val().SpiderWithLocation)},function(e){console.log("Error: "+e.code)}),o.next=6,h();case 6:t=o.sent,s=new t.maps.Geocoder,r=new t.maps.Map(e.$el),s.geocode({address:"Melbourne, Australia"},function(e,o){if("OK"!==o||!e[0])throw new Error(o);r.setCenter(e[0].geometry.location),r.fitBounds(e[0].geometry.viewport),n.map=r}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(1),console.error(o.t0);case 15:case"end":return o.stop()}},o,e,[[1,12]])}))()}},y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"App"})},staticRenderFns:[]};var k=n("VU/8")(b,y,!1,function(e){n("FQtB")},null,null).exports,x=n("/ocq");t.a.use(x.a);var A=new x.a({routes:[]}),F=n("yviF"),M=n.n(F);n("dih4"),n("hZls");M.a.initializeApp({apiKey:"AIzaSyC-MRfsT6n3r7wTq_x3rC1-img-Gxq5YUo",authDomain:"spider-location-storage-center.firebaseapp.com",databaseURL:"https://spider-location-storage-center.firebaseio.com",projectId:"spider-location-storage-center",storageBucket:"spider-location-storage-center.appspot.com"}),t.a.config.productionTip=!1,new t.a({el:"#app",router:A,components:{App:k},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.2b5ae8e919931b11093d.js.map