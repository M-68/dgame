if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>a(e,r),o={module:{uri:r},exports:c,require:t};s[r]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/109f1dee-77c58f20ab5064e9.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/190-7504794edb655c8d.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/254-21f188ba94ebf151.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/35.03ae917f238a8966.js",revision:"03ae917f238a8966"},{url:"/_next/static/chunks/386-7d3fb24dd1a6e0a4.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/471-9a673681f41187ef.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/531-e820d0cc85d707a9.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/627-8a6b97168b2558db.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/813-86778fd16f390d87.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/908-6300f4f940fa8f9c.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/928-efae74b96e90eae3.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/935-049847e63cf5015f.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/950-b26b35513d7f2bd0.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/_not-found/page-4376e61be71467b1.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/auth/page-676600b3747e7fe1.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/auth/register/page-66e96a0f6869f9af.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/layout-6653b98d86a3a17a.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/page-789cbbef0f0fa8ef.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/scenes/mining/page-a6989b7285c12da8.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/scenes/planet/page-61d306c5646001c1.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/app/tests/page-2009f584c7c44907.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/fd9d1056-158271cadec51f7c.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/main-77fe820a9746d4b7.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/main-app-99008b2573b3883f.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e7ed075d1ef99da0.js",revision:"dEHxoAg30WoGaOI6O2qkj"},{url:"/_next/static/css/67442e275e7464ef.css",revision:"67442e275e7464ef"},{url:"/_next/static/css/a024e8fecb0ae335.css",revision:"a024e8fecb0ae335"},{url:"/_next/static/css/b76c470af9a42821.css",revision:"b76c470af9a42821"},{url:"/_next/static/css/db44a8efd0a44a5d.css",revision:"db44a8efd0a44a5d"},{url:"/_next/static/dEHxoAg30WoGaOI6O2qkj/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/dEHxoAg30WoGaOI6O2qkj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/Archive/Inventory/FactionBase/Homebase.framework.js",revision:"38f9f3abd6514c4c71ebcb384f393c5f"},{url:"/assets/Archive/Inventory/FactionBase/Homebase.loader.js",revision:"b7650c6dbd10c680dc0affc1b3e2c2e1"},{url:"/assets/Archive/Inventory/FactionBase/Homebase.wasm",revision:"e242f6a5d1b0d479fbda673328350d8f"},{url:"/assets/Archive/Inventory/FactionBase/factionCover.jpg",revision:"998fb34d0f46991c9ab4e22b56bec2a4"},{url:"/assets/Archive/Inventory/Items/AeroCameraLevel1.png",revision:"b0095b88572678b14b751164bdafec8a"},{url:"/assets/Archive/Inventory/Items/AeroCameraLevel1NoBg.png",revision:"d92db950b319ff898b4b3b028998ee23"},{url:"/assets/Archive/Inventory/Items/Coal.png",revision:"f2c12cb628c5f1befb00934ef590eed9"},{url:"/assets/Archive/Inventory/Items/Fuel.png",revision:"aa39fc0ee9e5310fbd8df9c9c9228caf"},{url:"/assets/Archive/Inventory/Items/GoldenTelescopeLevel1Original.jpg",revision:"4ed335ca5ad7579441fcae7d4c311435"},{url:"/assets/Archive/Inventory/Items/GoldenTelescopeLevel1noBg.png",revision:"fe61acf446aa92820168b915e1d64e3b"},{url:"/assets/Archive/Inventory/Items/Silicates1.png",revision:"57aeda36fe8e660f9e7e388aa9cae035"},{url:"/assets/Archive/Inventory/Planets/Dump/65Binned.png",revision:"384b67f48a661347251312232e9ebf85"},{url:"/assets/Archive/Inventory/Planets/Dump/65Cover.png",revision:"fa14b14d9ffb751661fc22adfc3d8b7c"},{url:"/assets/Archive/Inventory/Planets/Dump/65Phase.png",revision:"f66e7998c7e7b89ca58a8073de29bb95"},{url:"/assets/Archive/Inventory/Planets/Dump/66Cover.png",revision:"9b53b2ac283656684d5ea5a00a8d94f5"},{url:"/assets/Archive/Inventory/Planets/Europa.png",revision:"5e01baea533129113d9d34f6de5c9a35"},{url:"/assets/Archive/Inventory/Planets/Mars.png",revision:"56b8fe5594110efe61945113cd019476"},{url:"/assets/Archive/Inventory/Planets/Planet59.png",revision:"428c91489994b502f47f529fbbe1747c"},{url:"/assets/Archive/Inventory/Planets/Planet63.png",revision:"d05e92b091ce34dd2a405f3c403b7698"},{url:"/assets/Archive/Inventory/Planets/Planet64.png",revision:"bc43db3cae98d2907e439596807805fa"},{url:"/assets/Archive/Inventory/Planets/PlanetBg.png",revision:"aa73eaf3e0304e7be31de35fe4a86d3a"},{url:"/assets/Archive/Inventory/Planets/SectorBg.png",revision:"6278cb9d4a7080eaacf2b2ffb250c567"},{url:"/assets/Archive/Inventory/Planets/rover.png",revision:"28e46f4d9a871a1afec830c482e726fb"},{url:"/assets/Archive/Inventory/Structures/Telescope.png",revision:"d2142a6fb24edb6ed6f40638e895068f"},{url:"/assets/Archive/Inventory/Structures/Telescope2.png",revision:"94b0a790fff053144e2bb63c1143b173"},{url:"/assets/Archive/Inventory/Structures/TelescopeReceiver.png",revision:"adbdc303fd7b86dd08761d23b607882e"},{url:"/assets/Archive/Inventory/Structures/TelescopeReceiverStruct.png",revision:"6cf3fb4e2f292ccfc356d28b05dccff0"},{url:"/assets/Archive/Onboarding/Bg.png",revision:"3d1d9e5ede244694750492b0bfc94be6"},{url:"/assets/Archive/Onboarding/Missions/Crucible/CrucibleGif.webp",revision:"e86425b7abb107c6a8934b77d5130631"},{url:"/assets/Archive/Onboarding/Missions/Crucible/CrucibleImage1.png",revision:"0000a3fca273b34662387215e2b9038b"},{url:"/assets/Archive/Onboarding/Missions/Crucible/CrucibleImage2.png",revision:"2fdeaf5d0cbd2aabe96a9735ca76272a"},{url:"/assets/Archive/Onboarding/Missions/Crucible/CrucibleImage3.png",revision:"dcd55aab5f70f29b13f65a5005bad2a1"},{url:"/assets/Archive/Onboarding/Missions/Emergence/EmergenceImage1.png",revision:"05738c37105a229f6dc67e3f95e9076d"},{url:"/assets/Archive/Onboarding/Missions/Emergence/EmergenceImage2.png",revision:"1687d7ef021d977dba7c13dde60a40d9"},{url:"/assets/Archive/Onboarding/Missions/Emergence/EmergenceImage3.png",revision:"bcce9d5b4cd6cc5505d1490e3305db65"},{url:"/assets/Archive/Onboarding/Missions/Emergence/EmergenceImage4.png",revision:"e05fd92c25df01e070cfc22b3bf89e9c"},{url:"/assets/Archive/Onboarding/Missions/Emergence/EmergenceImage5.png",revision:"35d9a1b812a520dfc243680c8ae09fad"},{url:"/assets/Archive/Onboarding/Missions/Emergence/TALONOVA (5)_clipdrop-enhance.png",revision:"b59102a0a7655c275cdc689bfb71f476"},{url:"/assets/Archive/Onboarding/Missions/Emergence/cartographer.png",revision:"bc0bd32c00672651498e4ac27f6ec911"},{url:"/assets/Archive/Onboarding/Missions/Emergence/cartographer.svg",revision:"67a1cbec05d00c226cd86b0a981f8dac"},{url:"/assets/Archive/Onboarding/Missions/Emergence/guardian.png",revision:"c4cb1a5d06f4ecf36d16ceb5c92f87d8"},{url:"/assets/Archive/Onboarding/Missions/Emergence/guardian.svg",revision:"b4759ba8ab3a66362c97209aa84b013e"},{url:"/assets/Archive/Onboarding/Missions/Emergence/navigator.png",revision:"43ef8636fca24a9469c7c5f22296d6af"},{url:"/assets/Archive/Onboarding/Missions/Emergence/navigator.svg",revision:"3f6467f410d7818933af8bb513a38fe3"},{url:"/assets/Archive/Onboarding/Missions/Navigate/NavigateImage1.png",revision:"9b53b2ac283656684d5ea5a00a8d94f5"},{url:"/assets/Archive/Onboarding/Missions/Navigate/NavigateImage2.png",revision:"0beb47aeb676517fd8ba8ba594b08656"},{url:"/assets/Archive/Onboarding/Missions/Navigate/NavigateImage3.png",revision:"5ac7701589b2c66636ad0b539a195bb6"},{url:"/assets/Archive/Onboarding/Missions/Navigate/ab936_kepler_view_of_a_ringed_planet_saturncore_in_outer_space__bb9ae32e-743a-4893-bebf-31f89ed21559.png",revision:"449a146738f989296326fcb4c8a0871f"},{url:"/assets/Archive/Onboarding/Missions/Silfur/GameItem1.png",revision:"5bd91fa3d1247aca7dc3cb29282a2fc9"},{url:"/assets/Archive/Onboarding/Missions/Silfur/GameItem2.png",revision:"9132028c444969591293e9ff14000252"},{url:"/assets/Archive/Onboarding/Missions/Silfur/GameItem3.png",revision:"d9d7495c85a1a4968ecc0fef2ba9ab64"},{url:"/assets/Archive/Onboarding/Missions/Silfur/SilfurImage1.png",revision:"449a146738f989296326fcb4c8a0871f"},{url:"/assets/Archive/Onboarding/Missions/Silfur/SolarShip1.png",revision:"972e5ba346bcfdc104ecfb4565435c0d"},{url:"/assets/Archive/Onboarding/Missions/Silfur/SolarShip2.png",revision:"00fa05cae65591850cd47f8df207a5f6"},{url:"/assets/Archive/Onboarding/Missions/Silfur/SolarShip3.png",revision:"74bf7d8b62b8b8ce829c45e353e819cb"},{url:"/assets/Archive/Surface.mp4",revision:"ebe3e35e7b78bc3b581ed95fcbd2d78d"},{url:"/assets/Archive/audio/Instrumental 02; Inventory.mp3",revision:"12e840bd86f49a17ad237e77cff0b980"},{url:"/assets/Archive/audio/Instrumental 04; Search and ecounter aliens-01.mp3",revision:"b4eec1a6d61d18387afce77193373941"},{url:"/assets/Archive/audio/Instrumental 05 v.6; boss fight.mp3",revision:"8db9a25951f264a4fbe96a696705f804"},{url:"/assets/Archive/audio/Instrumental 07; Ice Planet.mp3",revision:"271df8ef17f2dc2583f213595d9e3d81"},{url:"/assets/Archive/audio/Instrumental 08; Barren Planet.mp3",revision:"eb7f1c4896252caed2663da7cf40110b"},{url:"/assets/Archive/audio/WakeUp.mp3",revision:"4a2c4aa351cea6e2e62bddbe725794a2"},{url:"/assets/Archive/r2d2.png",revision:"0beaf06406d6265cb92aa50baea8c578"},{url:"/assets/Archive/ui/planet.svg",revision:"c268d8db01b8175ed7a1355739ca3754"},{url:"/assets/Backdrops/background1.jpeg",revision:"5c77cfacc630046769718c3ef38865b2"},{url:"/assets/Backdrops/background2.jpeg",revision:"f530c13582f2ebe7e7cdbba67efa6105"},{url:"/assets/Backdrops/garden.png",revision:"893bd51dee46b01967c65b28a6e9560c"},{url:"/assets/Backdrops/gardens.png",revision:"8edcc3f921543cdf7d41bf75e33a9072"},{url:"/assets/Backdrops/image.jpeg",revision:"65e83f2cf3a4ca02c1e006db1c802164"},{url:"/assets/Backdrops/satellite.jpg",revision:"ea79001d9cfc83c4eb5dbf0000fc3e77"},{url:"/assets/Captn.jpg",revision:"84dfa551865290b103d7a506ce294058"},{url:"/assets/Docs/Curves/Step1.png",revision:"b36d119c989dcfa50a51ab039886990d"},{url:"/assets/Docs/Curves/Step2.png",revision:"15c9ea1ad29f1778c2ea597c281bd65f"},{url:"/assets/Docs/Curves/Step3.png",revision:"2b8841b66eda2f24223c5f49a8e86c0e"},{url:"/assets/Docs/Curves/Step4.png",revision:"d3fdaa57e975083d0e5e4f1c4caa2c1c"},{url:"/assets/Images/capacity-1.png",revision:"b11baa8002d956d83035dc56d8b196bd"},{url:"/assets/Images/capacity-2.png",revision:"3aa28af2d9970405993a674875ccc05c"},{url:"/assets/Images/capacity-3.png",revision:"fb2edead7a418ac1ccc3b2b8658582b1"},{url:"/assets/Images/power-1.png",revision:"6dc4d6fc65a6a4a4626dad5b223f0b15"},{url:"/assets/Images/power-2.png",revision:"02e4c35f2cc98683d8446af714467aed"},{url:"/assets/Images/power-3.png",revision:"e85e80fc437cbdd37ea281ebad6861ca"},{url:"/assets/Images/speed-1.png",revision:"c2c11563476fa94cd79c529cae68cc2f"},{url:"/assets/Images/speed-2.png",revision:"14f619efe74218e9e0ca37e28a6d8ac8"},{url:"/assets/Images/speed-3.png",revision:"83b2fa733f09488123b88e404c7db635"},{url:"/assets/Items/22.png",revision:"aaf676880015ae1fca6670026e9edab5"},{url:"/assets/Items/28.png",revision:"58a70597ee0a85b0e929049c1518496a"},{url:"/assets/Items/Alloy.png",revision:"1ab072f72ce2d014a9d176b2780230ec"},{url:"/assets/Items/AutomatonController.png",revision:"9bec20ac77c7a10c9e0863903094b147"},{url:"/assets/Items/Chromite.png",revision:"48459b3c96b2eb0e03fa0303ba8dbac6"},{url:"/assets/Items/Coal.png",revision:"a20225d254d9c7c0b04bf01a89b8ac58"},{url:"/assets/Items/Copper.png",revision:"01eae5b57bb8475f67be87c38ebe52c0"},{url:"/assets/Items/Ice.png",revision:"655fc37ae85f470103f864a39e8ac847"},{url:"/assets/Items/Iron.png",revision:"7a673727c900b1a253cc2fe9b96c2ac9"},{url:"/assets/Items/Lidar.png",revision:"50a112cd26a8e868e64f6db7c5dc0ea4"},{url:"/assets/Items/MiningStructure.png",revision:"96640003bac02c57d277f011c2e7d1d7"},{url:"/assets/Items/Nickel.png",revision:"47473b610a62cd8c4a2ec26c86666e60"},{url:"/assets/Items/Roover.gif",revision:"ba881bf19d84414d2b61853ae2c262a1"},{url:"/assets/Items/Silicon.png",revision:"01eae5b57bb8475f67be87c38ebe52c0"},{url:"/assets/Items/TransitingTelescope.png",revision:"c57789844332d12cfbd36e2a46435130"},{url:"/assets/Items/Zoodex.png",revision:"57d29ff98723319efa6f03093fafec3f"},{url:"/assets/Items/camerars.png",revision:"74b20c14a9c01178533eed11bb93becc"},{url:"/assets/Items/miningstation.png",revision:"60f6398da814012af4fd64c94af65729"},{url:"/assets/Items/roover.png",revision:"eacaaf0fab67591794313b11bfd166a7"},{url:"/assets/Items/rover.svg",revision:"61143d0da3adec08b3325962b6198ee4"},{url:"/assets/Items/sw.js",revision:"aa14caf35328d6ef2b804009fce82acc"},{url:"/assets/Template.png",revision:"d12bd71d3d676bc16e638dc0434c2f81"},{url:"/favicon.ico",revision:"2483625e322b353626b172cc06960f01"},{url:"/manifest.json",revision:"37b9fb7e1eaff61240e36d268277954e"},{url:"/out0.png",revision:"4b24a573657e70d0799e743d86439756"},{url:"/placeholder-user.jpg",revision:"7ee6562646feae6d6d77e2c72e204591"},{url:"/placeholder.svg",revision:"446325a7666c39d7f840f674836a5454"},{url:"/planet.svg",revision:"e1e69e2676b03d06e2e34c2ecd9eac93"},{url:"/satellite.svg",revision:"a48e3337b7aa672558c7bce79c41e171"},{url:"/thirdweb.svg",revision:"075df596cf30f53ea22bbb1cddfbba73"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
