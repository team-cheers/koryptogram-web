'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "3dc2b12b33c9de1cb84f04d866a92bb4",
"index.html": "08316620872047263d6755aff9ac6e05",
"/": "08316620872047263d6755aff9ac6e05",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"static/download_app.html": "d169768bd9078a2945c5422e2d02fff1",
"static/image/ic_launcher-playstore.png": "4387706941e29b1c14121f82b10eac86",
"static/image/app_store_badge.2d2c14a6cfdf993c786b.png": "4b20d647f5a05fc1d3c17cbefea9beb1",
"manifest.json": "0944ee97a7df4ac47b7abcb65513a522",
"version.json": "118ca4ecb091177689702891584360d6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/fonts/MaterialIcons-Regular.otf": "7d018865b534e000435aa55cf3f78680",
"assets/NOTICES": "b8e93b25c962f7061b9b01624fed0517",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/lottie/clear_confetti.json": "6b701c75b58152e20b9e6b6eec0bd0be",
"assets/assets/lottie/loading.json": "abad90a9b8ea059b3d95da933ae3f84c",
"assets/assets/font/Pretendard-ExtraLight.otf": "049bb07edff45e5817fa4f892ebabe98",
"assets/assets/font/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/assets/font/Pretendard-Black.otf": "de507f665f6ea63a94678e529b2a4ff0",
"assets/assets/font/Pretendard-ExtraBold.otf": "67e8e4773c05f2988c52dfe6ea337f33",
"assets/assets/font/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/font/Pretendard-Light.otf": "de308b576c70af4871d436e89918fdf6",
"assets/assets/font/Pretendard-Thin.otf": "32c8b7e405cd546866e5ef1d33179cba",
"assets/assets/font/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/assets/font/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/icon/share.svg": "321ae0f43c896d790416585eb96154ec",
"assets/assets/icon/ic_profile.svg": "257499667c3ec01b25658bc20ae8a2db",
"assets/assets/icon/arrow-left.svg": "f2a212d965356a7c739caa3255d73b7f",
"assets/assets/icon/ranking.svg": "d5252517491d49f9a8e09fceaaaeb4c8",
"assets/assets/icon/add_heart.svg": "418c2822238eb53881dedb49e574f1a4",
"assets/assets/icon/key.svg": "7bd190f39833a1eb54ec9fa85f71551f",
"assets/assets/icon/flag.svg": "ffd6ea7c3ab8304f5a3a9bbf3cecf426",
"assets/assets/icon/cup.svg": "9458584fe87b56ed9fd8cbbcde257f00",
"assets/assets/icon/emoji-happy.svg": "213e95ea817851064fa57ac00cc600b1",
"assets/assets/icon/home.svg": "c9313545afb98667534461e805019b0c",
"assets/assets/icon/crown.svg": "fd7004ffc675609ace34f3c9584de3a0",
"assets/assets/icon/board.svg": "53811eaa136b47ca0c75e14fbfcd9974",
"assets/assets/icon/clock.svg": "3b03ef8a1be5986303c311217dbacab0",
"assets/assets/icon/ic_settings.svg": "db0524309adcb6776989fa5838bc67ab",
"assets/assets/icon/ic_home.svg": "b61cb73295cfdbff4739a6a34773dab5",
"assets/assets/audio/game_clear.mp3": "9ddb06b104c48b8717f328827cc66ba7",
"assets/assets/audio/fill_character_by_hint.mp3": "97a6a574f29f3fca3a66da8cdd81b40a",
"assets/assets/audio/correct_answer_2.mp3": "e0938c736c97b49909c2cc6c2dfcde32",
"assets/assets/audio/correct_answer_1.mp3": "f40508624f814cd5052fce7cfb8a97d2",
"assets/assets/audio/daily_game_play_background.mp3": "9bc32a340e1b3b2ebd7a7dbafd912b94",
"assets/assets/audio/resume.mp3": "0ea7fa1a102d90885b4a82b7d6c9533e",
"assets/assets/audio/game_play_background.mp3": "8e8430cc2445ef5c63b763f2f84f8cf9",
"assets/assets/audio/daily_game_clear_1.mp3": "05ab0ef513aad3e22312d4b0634d9391",
"assets/assets/audio/go_to_home.mp3": "0d94abd8597f3c4c6f1ab4b2ddaa1d6b",
"assets/assets/audio/correct_answer_3.mp3": "daa817e45bbce03838ff64bb36dd5873",
"assets/assets/audio/click_button.mp3": "702877660883b4031ddc091e2a63bbc3",
"assets/assets/audio/click_keyboard.mp3": "8b87cd3ba1dca58a3914c7ac602b09f6",
"assets/assets/audio/click_popup_button.mp3": "4397b37bf790bd72cce1e19d3b71b212",
"assets/assets/audio/click_korypto_panel.mp3": "10dd4426a56914cf7de6618cd576bb9b",
"assets/assets/audio/daily_game_clear_2.mp3": "ed31fc6d07dd7347cb8a86aea8c75d34",
"assets/assets/audio/click_small_button.mp3": "b38d74c18a5ceead0bdd776c814dbd62",
"assets/assets/audio/completion.mp3": "5936489467208a5871dbfc9c62218d59",
"assets/assets/audio/character_input.mp3": "6e701a1d7ea652abeb110e4dafde21fd",
"assets/assets/audio/wrong_answer.mp3": "cfbf823e4e0e27e824e9e1d00ec1a05a",
"assets/assets/audio/loading.mp3": "0bfab68ab7c61ea03256ed7d10b747a6",
"assets/assets/audio/failure.mp3": "26001f146dba4d9632efe875d476b2a4",
"assets/assets/audio/move_cursor.mp3": "d5aabed7f6ee065a5f1f5c8954a60cb7",
"assets/assets/audio/home_background.mp3": "c3bc06b33e5ffb8f474557891201889c",
"assets/assets/audio/put_right_letter.mp3": "3f95562d0d99988f1a3d8c3e2981efe3",
"assets/assets/image/ic_vt_heart.svg": "503e2995057bc2f34014237b01a4c9e6",
"assets/assets/image/ic_vt_key_confirm.svg": "26224cc524dea06a33d5a483dd042f12",
"assets/assets/image/ic_heart_plus.png": "0ce1508f51dcc0a7e0991296dd76feb8",
"assets/assets/image/medal_speed.png": "d6852bfc0051ae100f5baee7e8d4dda3",
"assets/assets/image/img_vt_splash_left.svg": "5006c184fe65d0b13833fae58d5b9239",
"assets/assets/image/img_daily_trophy_gray.png": "78e436b419a7cd33a19f4574c4b243cb",
"assets/assets/image/ic_vt_key_cancel.svg": "f172fa0c375cd5d6db28fbb3acb8781b",
"assets/assets/image/ic_daily_achieved_coin.png": "3ce5a3c6c34fe449491307ed5d2d0591",
"assets/assets/image/ic_vt_plus_badge.svg": "ccc3c4e29b743b64c6bef657881c1214",
"assets/assets/image/heart.png": "813afe82d4ffa489627a87e0f5e0e9d3",
"assets/assets/image/img_vt_splash_right.svg": "f33acbcda3ff1c2993414bf1acfbcdac",
"assets/assets/image/ic_daily_fail.png": "6077cf5864443dc0089e9529f255ba0c",
"assets/assets/image/img_challenge_calendar.png": "e5bcbbc0314e8b435a89628d72b4080f",
"assets/assets/image/img_daily_trophy.png": "1a81dd5562cc8c835f02e39447d3598d",
"assets/assets/image/img_vt_splash_center.svg": "fe7c99165119288b94dcfd181b4d5618",
"assets/assets/image/img_vt_home_right.svg": "196f4c797f34d5e4173319a834b2684a",
"assets/assets/image/img_vt_home_left.svg": "ded7014b8cebe435191afe2ddac4faa2",
"assets/assets/image/ic_heart.png": "b824ad8a70eb015aaf5417903319122a",
"assets/assets/image/ic_vt_key_arrow_left.svg": "5163b3e3b49378b78bca5732da0b8d1b",
"assets/assets/image/ic_vt_key_arrow_right.svg": "1b7653750b738cb164091cc3ac522a02",
"assets/assets/image/hint.png": "d0f5aa2b52733e9deb9e651cae2e3bda",
"assets/assets/image/ad_play_icon.png": "982dc57a4e001fd2ea1924e7b8ccdf4f",
"assets/assets/image/medal_time.png": "95258ab148771dd9a9457a0611211862",
"assets/AssetManifest.json": "491b4008045fa995636675d0774653fa",
"assets/FontManifest.json": "497eec1b694e73fb714c84c939de9b3f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "e267a975207f2b45e0b32389650b5f2e",
"assets/AssetManifest.bin": "f37855ba99db7c398987d11ce34fcc08",
"flutter_bootstrap.js": "b51a848705fdcf848cff82872928a058",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c"};
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
