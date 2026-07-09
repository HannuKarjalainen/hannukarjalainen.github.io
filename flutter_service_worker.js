'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a0fdc0685c477faa70a6d00f03c9a5ce",
"assets/AssetManifest.bin.json": "fc6444446efd9079beef4663f84219f1",
"assets/AssetManifest.json": "9e6760c287b0c33b7c7637326477f3fe",
"assets/assets/Animaatiot/A-esteAlo0p.glb": "47cb230893ae83bb5008144accb4d53b",
"assets/assets/Animaatiot/A-esteAlo0pOHI.glb": "7d77cc9fa11ca20a94880e401fd3634b",
"assets/assets/Animaatiot/A-esteAlo1p.glb": "548946b0844319c9093b28ea5eb0608f",
"assets/assets/Animaatiot/A-esteAlo2p.glb": "5349f9347e19ad0fdbd14832e438fcb4",
"assets/assets/Animaatiot/A-esteAvo0p.glb": "108bbcba23d58ecc9adda0f0c7c7fd7e",
"assets/assets/Animaatiot/A-esteAvo0pOHI.glb": "3db9492fc1cb55df68bb95863f6ddc06",
"assets/assets/Animaatiot/A-esteAvo1p.glb": "6bde34d44e1e5f2005bd7da68683ee92",
"assets/assets/Animaatiot/A-esteAvo2p.glb": "94440995330d4d3132144539c869aef1",
"assets/assets/Animaatiot/Hyppyeste0p.glb": "862f8711e6da572ddc0789f7f2953568",
"assets/assets/Animaatiot/Hyppyeste1p.glb": "f12c320d57ba278525fd60f2bc347556",
"assets/assets/Animaatiot/Hyppyeste2p.glb": "09075c86c03308678808bd61165d277d",
"assets/assets/Animaatiot/Lapimeno0p.glb": "1e30c1ed93c22e611621912545d34179",
"assets/assets/Animaatiot/Lapimeno0pOHI.glb": "06cb49bad43e57c977880b5c02dd1980",
"assets/assets/Animaatiot/Lapimeno1p.glb": "a2a5648cd2d508c8ececc2b903ee4b8b",
"assets/assets/Animaatiot/Lapimeno2p.glb": "b02520ae1a3f4c88c180fd70dffb5202",
"assets/assets/Animaatiot/PujotteluAlo0p.glb": "d3208e5814470189c19a8d9758b0a5d3",
"assets/assets/Animaatiot/PujotteluAlo0pOHI.glb": "b4b28f302f4cf1149029f7305019118c",
"assets/assets/Animaatiot/PujotteluAlo1p.glb": "fcd684589e06afb35826fe662ee7cadc",
"assets/assets/Animaatiot/PujotteluAlo2p.glb": "a7997cedd3a315c7bf7261dfc1042bba",
"assets/assets/Animaatiot/PujotteluAvo0p.glb": "13751ec632a8037d53eaa7b2311229df",
"assets/assets/Animaatiot/PujotteluAvo0pOHI.glb": "7235c09a8552fa7dc5ec5cf1a0d75733",
"assets/assets/Animaatiot/PujotteluAvo1p.glb": "2a6748722337e345c86bd101607bdb98",
"assets/assets/Animaatiot/PujotteluAvo2p.glb": "1c54fa89ea7c55155a6f492ab3a9bbab",
"assets/assets/Animaatiot/Putki0p.glb": "bb587b575a6d4d2f393c9875a823899b",
"assets/assets/Animaatiot/Putki0pYLI.glb": "fd5ba51e2d5020c1d8a853fcdd57589e",
"assets/assets/Animaatiot/Putki1p.glb": "47ca037377ba357e188c2414b4836a22",
"assets/assets/Animaatiot/Putki2p.glb": "93326450aa47116b51b45cd5e4d38f29",
"assets/assets/Animaatiot/Testikumipaa.glb": "47ca037377ba357e188c2414b4836a22",
"assets/assets/Animaatiot/Tikas0p.glb": "33d21263efd42879b9f3ac44bf7c7202",
"assets/assets/Animaatiot/Tikas0pYli.glb": "7c31ce80aa33d7e0a23a039faa989a55",
"assets/assets/Animaatiot/Tikas1p.glb": "7c1172a82eb77ad45f32286e023b8fe6",
"assets/assets/Animaatiot/TikasAlo2p.glb": "6ac235d0bfe524e256f9b62672deb338",
"assets/assets/Animaatiot/TikasAvo2p.glb": "a31312da416124091056781a3262d53f",
"assets/assets/Animaatiot/YliAli0p.glb": "d5ce013ae8498c3d2cb65690a41a4a0f",
"assets/assets/Animaatiot/YliAli1p.glb": "fadfdcaff56aa30d0773b57e4da77f39",
"assets/assets/Animaatiot/YliAli2p.glb": "fa576a733fb3b333a64a0d055c6cf746",
"assets/assets/Animaatiot/YliAli2pALI.glb": "c5a1c029a560cbcac528057ef52c56ba",
"assets/assets/esteet/A-estealo3D.glb": "5eb9570c123766fc63dd51a8943d6a26",
"assets/assets/esteet/A-esteavo3D.glb": "b5ba4fc80a87db6c9a6c9eb5b8691d60",
"assets/assets/esteet/Hyppyeste3D.glb": "dbf194fe511bbef51b512b5ada06060f",
"assets/assets/esteet/Lapimeno3D.glb": "df796ef22528f24fa627803fa3b2fdb5",
"assets/assets/esteet/PujotteluAlo3D.glb": "6259bbd63d0b3ecc1927337246d8e95b",
"assets/assets/esteet/PujotteluAvo3D.glb": "0fbcb836af09e0a454a88f153abd7267",
"assets/assets/esteet/Putkieste3D.glb": "93d9aaa20f7a2c1897f0ef62fd4a4f7b",
"assets/assets/esteet/Tikaseste3D.glb": "585a0c8c7c72036a2bd33507d544f5e5",
"assets/assets/esteet/Yliali3D.glb": "bf3165049729f018603914116553a8b1",
"assets/assets/logo_agilitykissat_white-1.png": "2e0559f0debce2094c8856c4b642ae78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5f7fdeedfca06a361917098a3e0a0008",
"assets/NOTICES": "ce7492392905314cc8cce01b5dcade0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "d370dc1bc2b1dd29090c1946dbef646a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "883aa29971473e922d466b02a25a20f4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3a2e0bddd7bd48aa2dae44937ba8b5db",
"/": "3a2e0bddd7bd48aa2dae44937ba8b5db",
"main.dart.js": "b9df8ace216fed8775470d5399d53fcc",
"manifest.json": "2ac64a674e6a8b966a4c89c0a5b7d5b2",
"version.json": "f5b6efbc381e2325769e69322eabf713"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
