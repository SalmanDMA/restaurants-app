if(!self.define){let e,i={};const d=(d,n)=>(d=new URL(d+".js",n).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const a=e=>d(e,r),o={module:{uri:r},exports:s,require:a};i[r]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"102.bundle.js",revision:"b3c16b1e7a67d31ccbadcbde6dc847d8"},{url:"23.bundle.js",revision:"a3dcd446cbc220bf0f9ff69d2afc08e9"},{url:"33.bundle.js",revision:"3636465240e4cdd88795c498dcc1462f"},{url:"355.bundle.js",revision:"3a7da2df46e71708e865081fd35ec8bc"},{url:"407.bundle.js",revision:"8a9e9d7788510447d01cfe7383bca234"},{url:"453.bundle.js",revision:"a5a48371c565cbeaf215ec4b38367d5b"},{url:"485.bundle.js",revision:"ac3689aaf5c99c0336d9b39da60ac24a"},{url:"551.bundle.js",revision:"5793d8b430a7baab021b76966814d6c1"},{url:"57.bundle.js",revision:"ed63e5c43c6051773bb0cea2608ba37b"},{url:"596.bundle.js",revision:"ebb21aea584d24205c11d951f8a7cd35"},{url:"91bf5c4a50c73e706c25.jpg",revision:null},{url:"9241ee2eeff1068e8fe1.jpg",revision:null},{url:"app.bundle.js",revision:"92b87d1fb542c384b5e50e0f3afa83ad"},{url:"app.webmanifest",revision:"edcf5ecc4eb4cc2d2e1ad798dae3823e"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"images/heros/hero-image_1-large.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_1-small.jpg",revision:"61aef8fa09a7b4ea7c332b303a7d432c"},{url:"index.html",revision:"440f44b908ed2fe99101987654bd6be6"},{url:"vendors.bundle.js",revision:"d1b3875a29be7eb78ddc04c2318aede7"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"themoviedb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"themoviedb-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
