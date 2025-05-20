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
    "revision": "a61c23e3554178637e100f2274524404"
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
    "url": "assets/js/31.f890fe9d.js",
    "revision": "6ef1378d37e5695e13c3b0e819ce03cf"
  },
  {
    "url": "assets/js/32.b95e9da3.js",
    "revision": "cffa6c551e714398f894872a0f3b6911"
  },
  {
    "url": "assets/js/33.6c83cecd.js",
    "revision": "a386d07f0a9d871ce4a6ad39e1c0f391"
  },
  {
    "url": "assets/js/34.fddf655a.js",
    "revision": "a6141c86debc31ecfb9f6343d462e8ef"
  },
  {
    "url": "assets/js/35.3fe04c76.js",
    "revision": "ffabe2415b0b5693f8b609cc974c1413"
  },
  {
    "url": "assets/js/36.54e345f8.js",
    "revision": "f90df942fe83c3343a12238413bc030d"
  },
  {
    "url": "assets/js/37.0f1c5af3.js",
    "revision": "3eda473b41fe1ca09f3162c7e909ebb7"
  },
  {
    "url": "assets/js/38.268445eb.js",
    "revision": "dafbe4509e8f87c09a85dad33d889113"
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
    "url": "assets/js/app.2ac127e9.js",
    "revision": "55ae48da5875ab3bd352a1ef358b4cc3"
  },
  {
    "url": "assets/js/vendors~docsearch.2b3daa02.js",
    "revision": "3a14dad5b39f37935987b0dfa6665e54"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1976236e38ddd0bbeb6731e5e757aaa1"
  },
  {
    "url": "design/index.html",
    "revision": "7182bab5514f8bdfe268745e31d50f63"
  },
  {
    "url": "index.html",
    "revision": "c85ef9fa10a4594a869ebea7d11be733"
  },
  {
    "url": "intro/index.html",
    "revision": "ece81951ea52e7a8bb79ec904a564ac6"
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
    "revision": "2f28321edab20f384a5f4cb628c36c7f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f7a554d9056ea8b5f05af0493f6fb3d3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c56f0b1883019f6b66f7b0a181368b01"
  },
  {
    "url": "software/index.html",
    "revision": "44810f28f49b206bcdaf0fd53673f04d"
  },
  {
    "url": "test/index.html",
    "revision": "497345df1dc9c4c5e4adbd2bad86de71"
  },
  {
    "url": "use cases/index.html",
    "revision": "25b19d1b7b766110d329bf5ec770711c"
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
