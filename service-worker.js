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
    "revision": "e9613f7a8848fc01abf324449b4f71f4"
  },
  {
    "url": "assets/css/0.styles.ea6eec60.css",
    "revision": "b4a1c7945c0be7c9169d7fb0c17de676"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.052c1d65.js",
    "revision": "067ea2ea38978d890977f05820f05bc2"
  },
  {
    "url": "assets/js/10.df011727.js",
    "revision": "89b71ce84018538cb51977b1cd3f907b"
  },
  {
    "url": "assets/js/13.122b223a.js",
    "revision": "a11fc5b5617837bccf3a606c0152ad65"
  },
  {
    "url": "assets/js/14.3db95675.js",
    "revision": "655e1b45759be291e424ea1be0086fe1"
  },
  {
    "url": "assets/js/15.a176c171.js",
    "revision": "57ba85da218c41ac33a15c269c9f43d0"
  },
  {
    "url": "assets/js/16.49a677c9.js",
    "revision": "acc26294500103ca78d23a470cf4748d"
  },
  {
    "url": "assets/js/17.3028d09f.js",
    "revision": "89fed22d14e1e20c39748e74b5c81797"
  },
  {
    "url": "assets/js/18.8eefea0b.js",
    "revision": "ea0b6f3dbd3bfb2527387e4b02d65fd7"
  },
  {
    "url": "assets/js/19.96633faf.js",
    "revision": "e5d5fc14d95e46d08c9e276d4ec38772"
  },
  {
    "url": "assets/js/2.53b9ae8c.js",
    "revision": "4fc469b09dec7def598c75fc78905fdf"
  },
  {
    "url": "assets/js/20.cb244e87.js",
    "revision": "ccfb04220f82e67a02b3026ea3406bfd"
  },
  {
    "url": "assets/js/21.8955b6c2.js",
    "revision": "92d45e6d128714c69ca80b7943726655"
  },
  {
    "url": "assets/js/22.0c6ac051.js",
    "revision": "bb963272d3c674d1a316681a79e9c4cb"
  },
  {
    "url": "assets/js/23.9bb658d8.js",
    "revision": "fd718b309bd5904f9e06d4eb7d3bc00b"
  },
  {
    "url": "assets/js/24.4d2604e9.js",
    "revision": "3ae8ceaf46a01b790738a544e15bcb4f"
  },
  {
    "url": "assets/js/25.7b154457.js",
    "revision": "1737fcd0a552941ddda25dc027d3f43e"
  },
  {
    "url": "assets/js/26.145fc257.js",
    "revision": "c34cc020c23ac01903541ca8dff7876c"
  },
  {
    "url": "assets/js/27.6a51d745.js",
    "revision": "e2b6291a97873c427a124a6c3c75860a"
  },
  {
    "url": "assets/js/28.f394a884.js",
    "revision": "1968843e3b3a794e14ab8051823f08af"
  },
  {
    "url": "assets/js/29.f8bcc71b.js",
    "revision": "8c264471110b44afc5c9dd3c24fddce6"
  },
  {
    "url": "assets/js/3.0ec1ca40.js",
    "revision": "c0bce7fcc174eb10a0e5eb6c7b557ea2"
  },
  {
    "url": "assets/js/30.e98d8969.js",
    "revision": "fee86a255c5e21690f49ec30b252760c"
  },
  {
    "url": "assets/js/31.19546083.js",
    "revision": "454f6d5dccaaef653ca29b12683fb868"
  },
  {
    "url": "assets/js/32.d91bf0cc.js",
    "revision": "ce797bcae4587da5387b693d693b6f82"
  },
  {
    "url": "assets/js/33.f09049b0.js",
    "revision": "449e48fc2f97511cb6bfaa88f30ff8b7"
  },
  {
    "url": "assets/js/34.11f9a813.js",
    "revision": "a6141c86debc31ecfb9f6343d462e8ef"
  },
  {
    "url": "assets/js/35.e708c680.js",
    "revision": "fdc0a4ee22d2efe284548f360f825588"
  },
  {
    "url": "assets/js/36.b115dcb7.js",
    "revision": "e100e37687ee76dec90b7fa5b6e8f609"
  },
  {
    "url": "assets/js/37.2fba7c16.js",
    "revision": "97b78032c36f77c79582828f7ff4ab0a"
  },
  {
    "url": "assets/js/38.5b1b516c.js",
    "revision": "9b55bd2d0e81ce6629ba06f79b105501"
  },
  {
    "url": "assets/js/39.51beffa7.js",
    "revision": "a15c0466ea73b85dd5b9eb958736da25"
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
    "url": "assets/js/5.38247904.js",
    "revision": "436b24a11aafd1bd4a2891b887ca3a3d"
  },
  {
    "url": "assets/js/6.d061c78b.js",
    "revision": "9a6f9ee4ebfac4b09d327758c0483615"
  },
  {
    "url": "assets/js/7.4513ddb2.js",
    "revision": "7b37278a35d8194a183cb4353061d4f2"
  },
  {
    "url": "assets/js/8.0ca91c7c.js",
    "revision": "6c410b803c9f3189735368f0b242b085"
  },
  {
    "url": "assets/js/9.1901a338.js",
    "revision": "97a5ad12d39bbf309b99dd06c95e7b58"
  },
  {
    "url": "assets/js/app.5c22c5cf.js",
    "revision": "30e8d71350e078a70c8e2a437a0e28d3"
  },
  {
    "url": "assets/js/vendors~docsearch.2b3daa02.js",
    "revision": "3a14dad5b39f37935987b0dfa6665e54"
  },
  {
    "url": "conclusion/index.html",
    "revision": "57548223bfcd4cf5a96f20fdd600b076"
  },
  {
    "url": "design/index.html",
    "revision": "e9f2f28da2ae0d788d636b56984c8d1a"
  },
  {
    "url": "index.html",
    "revision": "7a11d53f856e649cb77f12018507b2b8"
  },
  {
    "url": "intro/index.html",
    "revision": "0614ebe87b0590e867e3fec06108ba4f"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6463f04505c1bc53450e66966d64b621"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6aa1dea92fa8a7e2114ef12b8cc4e1ab"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3b651d8e9b8148df0a157ec9d8191216"
  },
  {
    "url": "software/index.html",
    "revision": "90181a9a1043a66576f4c0928ca5e2b9"
  },
  {
    "url": "test/index.html",
    "revision": "5b4e520a466a43c7eaa6c2200cb12d37"
  },
  {
    "url": "use cases/index.html",
    "revision": "7cc69bdfd70ca64da51c3f1366a21fd5"
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
