webpackJsonp([1],{NHnr:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=n("7+uW"),t=n("Xxa5"),a=n.n(t),r=n("exGp"),i=n.n(r),p=n("//Fk"),l=n.n(p),c="AIzaSyAVES9cLOzyLcMkOM2UsdlHuLhs2gcLhEI",d="gmapsCallback",u=!!window.google,m=void 0,g=void 0,f=new l.a(function(e,o){m=e,g=o});function h(){if(u)return f;u=!0,window[d]=function(){return m(window.google)};var e=document.createElement("script");return e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key="+c+"&callback="+d,e.onerror=g,document.querySelector("head").appendChild(e),f}var v=n("kxiW"),w=n.n(v),L={spiderType:{"Funnel-Web Spider":{url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",poisonLvl:"Deadly & Dangerous"},"Garden Orb Weaver Spider":{url:"https://maps.google.com/mapfiles/ms/icons/green-dot.png",poisonLvl:"Low Risk"},"Redback Spider":{url:"https://maps.google.com/mapfiles/ms/icons/pink-dot.png",poisonLvl:"Deadly & Dangerous"},"Tarantula Spider":{url:"https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",poisonLvl:"Toxic & Painful Bite"},"White-Tailed Spider":{url:"https://maps.google.com/mapfiles/ms/icons/purple-dot.png",poisonLvl:"Deadly & Dangerous"},"Daddy Long Legs Spider":{url:"https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",poisonLvl:"Low Risk"},"Huntsman Spider":{url:"https://maps.google.com/mapfiles/ms/icons/orange-dot.png",poisonLvl:"Low Risk"},"Red-Headed Mouse Spider":{url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png",poisonLvl:"Toxic & Painful Bite"},"St Andrews Cross Spider":{url:"https://firebasestorage.googleapis.com/v0/b/spider-location-storage-center.appspot.com/o/brown.png?alt=media&token=fd967824-dfce-468c-85a7-9f031e9c84d6",poisonLvl:"Low Risk"}}},S=n("VU/8")(L,null,!1,null,null,null).exports,k={name:"App",data:function(){return{locations:[],names:[],map:null}},methods:{storeSpidersInfo:function(e){for(var o in e)this.locations.push({position:{lat:parseFloat(e[o].SpiderLat),lng:parseFloat(e[o].SpiderLng)}}),this.names.push({name:e[o].SpiderName})}},watch:{locations:function(e,o){for(var n=this.map,s=0;s<this.locations.length;s++){var t=S.spiderType[this.names[s].name].url,a=new google.maps.Marker({position:this.locations[s].position,map:n,icon:{url:t}}),r=new google.maps.InfoWindow({content:this.names[s].name+": "+S.spiderType[this.names[s].name].poisonLvl});google.maps.event.addListener(a,"click",function(e,o){return function(){o.open(n,e)}}(a,r))}}},mounted:function(){var e=this;return i()(a.a.mark(function o(){var n,s,t,r;return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=e,o.prev=1,w.a.database().ref().on("value",function(e){n.storeSpidersInfo(e.val().SpiderWithLocation)},function(e){console.log("Error: "+e.code)}),o.next=6,h();case 6:s=o.sent,t=new s.maps.Geocoder,r=new s.maps.Map(e.$el),t.geocode({address:"Melbourne, Australia"},function(e,o){if("OK"!==o||!e[0])throw new Error(o);r.setCenter(e[0].geometry.location),r.fitBounds(e[0].geometry.viewport),n.map=r}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(1),console.error(o.t0);case 15:case"end":return o.stop()}},o,e,[[1,12]])}))()}},y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"App"})},staticRenderFns:[]};var b=n("VU/8")(k,y,!1,function(e){n("NZK5")},null,null).exports,x=n("/ocq");s.a.use(x.a);var A=new x.a({routes:[]}),T=n("yviF"),R=n.n(T);n("dih4"),n("hZls");R.a.initializeApp({apiKey:"AIzaSyC-MRfsT6n3r7wTq_x3rC1-img-Gxq5YUo",authDomain:"spider-location-storage-center.firebaseapp.com",databaseURL:"https://spider-location-storage-center.firebaseio.com",projectId:"spider-location-storage-center",storageBucket:"spider-location-storage-center.appspot.com"}),s.a.config.productionTip=!1,new s.a({el:"#app",router:A,components:{App:b},template:"<App/>"})},NZK5:function(e,o){}},["NHnr"]);
//# sourceMappingURL=app.27a116cd54ac71fa78a6.js.map