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
    "revision": "c991c08c539c5a4276686e9b5bebf1fc"
  },
  {
    "url": "assets/css/0.styles.b9b61e03.css",
    "revision": "11eb115d10fa8bc4bc194df5dff9bb3f"
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
    "url": "assets/js/19.708f16e8.js",
    "revision": "e5d5fc14d95e46d08c9e276d4ec38772"
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
    "url": "assets/js/23.1c0f72a6.js",
    "revision": "fd718b309bd5904f9e06d4eb7d3bc00b"
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
    "url": "assets/js/30.983b9916.js",
    "revision": "cf43dd7cd64b01a603b808243ed84939"
  },
  {
    "url": "assets/js/31.5dbf2545.js",
    "revision": "fe3c4fa5bcad059a85babda3a5952792"
  },
  {
    "url": "assets/js/32.bb90e8ba.js",
    "revision": "1dcbf519053d60ab191963ff19c2835d"
  },
  {
    "url": "assets/js/33.76620516.js",
    "revision": "f80d2aae8e887fecb5b5b21c8d1b3696"
  },
  {
    "url": "assets/js/34.20bdaab1.js",
    "revision": "ced574b2f4448d2bf096ac632f5911db"
  },
  {
    "url": "assets/js/35.ff288a7c.js",
    "revision": "edcc8e4758ada4287a868d7e5e0841c2"
  },
  {
    "url": "assets/js/36.bdfaf66b.js",
    "revision": "5a2520972d8f6150d308b47043ecb267"
  },
  {
    "url": "assets/js/37.becd3db4.js",
    "revision": "97b78032c36f77c79582828f7ff4ab0a"
  },
  {
    "url": "assets/js/38.8fec684e.js",
    "revision": "9c2c0a9c95005237de0fd43e17984041"
  },
  {
    "url": "assets/js/39.aa95c98c.js",
    "revision": "e8e09afa26bf13a615a4f87a511066c7"
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
    "url": "assets/js/app.99610b2a.js",
    "revision": "d04b4aef12b26857f9731a2a32a6bf6b"
  },
  {
    "url": "assets/js/vendors~docsearch.2b3daa02.js",
    "revision": "3a14dad5b39f37935987b0dfa6665e54"
  },
  {
    "url": "conclusion/index.html",
    "revision": "eab9569067359063ef4d87b47600eebb"
  },
  {
    "url": "design/index.html",
    "revision": "68b6774a0ce478c8cec2ec6d27fa38fa"
  },
  {
    "url": "index.html",
    "revision": "fcdeb360326887cf3e36e8ae8a9d864e"
  },
  {
    "url": "intro/index.html",
    "revision": "7225e5ac605651a4523271501e31fcdc"
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
    "revision": "9b11545cfe185d7f30fb2d8126326e30"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f708ff14ff2dbd3de9e04d5a8cc2d403"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4a1759fc0132f6ddb7f71e49c8d56d04"
  },
  {
    "url": "software/index.html",
    "revision": "f8aaee908c4074dd7b46cb9300f22de4"
  },
  {
    "url": "test/index.html",
    "revision": "ac56ee720d110b2256c04aa1de6db166"
  },
  {
    "url": "use cases/index.html",
    "revision": "135d38f6ae11dd4a01d02ac7feee390b"
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
