/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ecd354994e718bfab5093484cf135075"
  },
  {
    "url": "assets/css/0.styles.7da1363d.css",
    "revision": "138e20af8a9edce71100ed7d5df9d4c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.06dff83e.js",
    "revision": "89fe332907762453a203abd274b0dd17"
  },
  {
    "url": "assets/js/10.67e91ea3.js",
    "revision": "89b71ce84018538cb51977b1cd3f907b"
  },
  {
    "url": "assets/js/13.e64039b3.js",
    "revision": "d1b994274cebebb5c6ac7a637addb219"
  },
  {
    "url": "assets/js/14.745a604f.js",
    "revision": "655e1b45759be291e424ea1be0086fe1"
  },
  {
    "url": "assets/js/15.1959df03.js",
    "revision": "ffbb1f95b56b7c807e640f453ff47b49"
  },
  {
    "url": "assets/js/16.71a41e40.js",
    "revision": "acc26294500103ca78d23a470cf4748d"
  },
  {
    "url": "assets/js/17.fc1260a2.js",
    "revision": "89fed22d14e1e20c39748e74b5c81797"
  },
  {
    "url": "assets/js/18.27fde912.js",
    "revision": "ea0b6f3dbd3bfb2527387e4b02d65fd7"
  },
  {
    "url": "assets/js/19.ad10c542.js",
    "revision": "a5ca0a2471d468b5cd92e8d99c17da24"
  },
  {
    "url": "assets/js/2.33d8cc68.js",
    "revision": "4fc469b09dec7def598c75fc78905fdf"
  },
  {
    "url": "assets/js/20.cb244e87.js",
    "revision": "ccfb04220f82e67a02b3026ea3406bfd"
  },
  {
    "url": "assets/js/21.27f1ca59.js",
    "revision": "92d45e6d128714c69ca80b7943726655"
  },
  {
    "url": "assets/js/22.79f4babe.js",
    "revision": "bb963272d3c674d1a316681a79e9c4cb"
  },
  {
    "url": "assets/js/23.e24904bc.js",
    "revision": "d2a9433525ec4bd6cd93c53e4327d858"
  },
  {
    "url": "assets/js/24.f09036e0.js",
    "revision": "3ae8ceaf46a01b790738a544e15bcb4f"
  },
  {
    "url": "assets/js/25.77bf1db1.js",
    "revision": "d2378cdaef4b07eb2eff362037d79288"
  },
  {
    "url": "assets/js/26.145fc257.js",
    "revision": "c34cc020c23ac01903541ca8dff7876c"
  },
  {
    "url": "assets/js/27.2870a607.js",
    "revision": "e2b6291a97873c427a124a6c3c75860a"
  },
  {
    "url": "assets/js/28.5a71915a.js",
    "revision": "1968843e3b3a794e14ab8051823f08af"
  },
  {
    "url": "assets/js/29.2bcd3ef5.js",
    "revision": "8c264471110b44afc5c9dd3c24fddce6"
  },
  {
    "url": "assets/js/3.04352af6.js",
    "revision": "c0bce7fcc174eb10a0e5eb6c7b557ea2"
  },
  {
    "url": "assets/js/30.2737d8d2.js",
    "revision": "87ec5a9c0442ecd8234ea3052c83b26a"
  },
  {
    "url": "assets/js/31.75d9ddad.js",
    "revision": "f08f5a7fa70e1c4001370211c9642f26"
  },
  {
    "url": "assets/js/32.18fe1f07.js",
    "revision": "f78720f7cc34fa6a17f03f8e093fd63c"
  },
  {
    "url": "assets/js/33.6c83cecd.js",
    "revision": "a386d07f0a9d871ce4a6ad39e1c0f391"
  },
  {
    "url": "assets/js/34.20bdaab1.js",
    "revision": "ced574b2f4448d2bf096ac632f5911db"
  },
  {
    "url": "assets/js/35.b007d7ac.js",
    "revision": "cc942e87229fce69a4a1268d383ec373"
  },
  {
    "url": "assets/js/36.bdfaf66b.js",
    "revision": "5a2520972d8f6150d308b47043ecb267"
  },
  {
    "url": "assets/js/37.1c2b790b.js",
    "revision": "f2b7aab2b5a6b58dae59ba8509fae4b9"
  },
  {
    "url": "assets/js/38.1410b1f7.js",
    "revision": "53736f908da6ff699a06bf332b01b911"
  },
  {
    "url": "assets/js/39.27c1e6b9.js",
    "revision": "4edde6205e036ed091c3e4d8edb99bad"
  },
  {
    "url": "assets/js/4.9e34ee90.js",
    "revision": "77f3e2aaa80a2d172dc2cac178dfa98d"
  },
  {
    "url": "assets/js/41.fbbb4e3f.js",
    "revision": "544be7ece3f69cb2794d539b45e6bf4f"
  },
  {
    "url": "assets/js/5.14022c7f.js",
    "revision": "436b24a11aafd1bd4a2891b887ca3a3d"
  },
  {
    "url": "assets/js/6.06f47357.js",
    "revision": "9a6f9ee4ebfac4b09d327758c0483615"
  },
  {
    "url": "assets/js/7.ad434b72.js",
    "revision": "7b37278a35d8194a183cb4353061d4f2"
  },
  {
    "url": "assets/js/8.0ca91c7c.js",
    "revision": "6c410b803c9f3189735368f0b242b085"
  },
  {
    "url": "assets/js/9.dcf40924.js",
    "revision": "97a5ad12d39bbf309b99dd06c95e7b58"
  },
  {
    "url": "assets/js/app.d2f0bec8.js",
    "revision": "5762e2713bb0d603999160ced82c58e9"
  },
  {
    "url": "assets/js/vendors~docsearch.2b3daa02.js",
    "revision": "3a14dad5b39f37935987b0dfa6665e54"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1d00e40b97a96a31a69f0c82334faf61"
  },
  {
    "url": "design/index.html",
    "revision": "7b68308ab0942155954ef9e60199d927"
  },
  {
    "url": "index.html",
    "revision": "4e8c84e2abc20b545f0bf68a7f8e95c5"
  },
  {
    "url": "intro/index.html",
    "revision": "a0d37a9f6ad67c65cf81aee56ae9c0fa"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "450711b9b263f62a523d272e190cffd7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "03291c744e90cec7fcb94e900047cf37"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "639cde98bbdb6177b838cf627854db2e"
  },
  {
    "url": "software/index.html",
    "revision": "d44de52c8d142027de26503928270c84"
  },
  {
    "url": "test/index.html",
    "revision": "b7f3cc1ca6097846586dab6a6dcdbb97"
  },
  {
    "url": "use cases/index.html",
    "revision": "bed9b37a40aad7ba60a7b7d31714762a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
