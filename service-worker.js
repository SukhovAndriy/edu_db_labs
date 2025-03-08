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
    "revision": "12054b95c934eb2b3c2fda277381804c"
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
    "url": "assets/js/30.2737d8d2.js",
    "revision": "87ec5a9c0442ecd8234ea3052c83b26a"
  },
  {
    "url": "assets/js/31.b88ebeec.js",
    "revision": "35dce4d78ffe9c7fee5733e406e76ee9"
  },
  {
    "url": "assets/js/32.2bc06bf8.js",
    "revision": "002b0907cd09cf26b34783d8ac89ef7c"
  },
  {
    "url": "assets/js/33.76620516.js",
    "revision": "f80d2aae8e887fecb5b5b21c8d1b3696"
  },
  {
    "url": "assets/js/34.3587e0fb.js",
    "revision": "120ec10a57b2d84d36ce133fe25fc455"
  },
  {
    "url": "assets/js/35.853dc007.js",
    "revision": "9cd18842350fa6a4420f7747a6171522"
  },
  {
    "url": "assets/js/36.c4633dba.js",
    "revision": "07be1184619f011ed9a76f041aa85945"
  },
  {
    "url": "assets/js/37.becd3db4.js",
    "revision": "97b78032c36f77c79582828f7ff4ab0a"
  },
  {
    "url": "assets/js/38.268445eb.js",
    "revision": "dafbe4509e8f87c09a85dad33d889113"
  },
  {
    "url": "assets/js/39.75fda8f3.js",
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
    "url": "assets/js/app.4fd6b962.js",
    "revision": "21d021714a78edb80d6ddb8ac1e14663"
  },
  {
    "url": "assets/js/vendors~docsearch.2b3daa02.js",
    "revision": "3a14dad5b39f37935987b0dfa6665e54"
  },
  {
    "url": "conclusion/index.html",
    "revision": "091b46a6a55ade65f0c5019975f389c9"
  },
  {
    "url": "design/index.html",
    "revision": "22f30311eac0b6166b403ca8c8bbb238"
  },
  {
    "url": "index.html",
    "revision": "2b08dd858e3e2e7b5fd9caf14258d364"
  },
  {
    "url": "intro/index.html",
    "revision": "c58445ce7eb08083f274962af0c4e686"
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
    "revision": "f8c25209e3cbcea5065ac3a33a0fd17e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cd53f433c2ca7eec3514346d9b98ffde"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b3e455ffb35db9146f838eb1c1a2a884"
  },
  {
    "url": "software/index.html",
    "revision": "7d3c15fa3e6a25b17bcf0f96b5791c34"
  },
  {
    "url": "test/index.html",
    "revision": "0cecb51a4dccb793eb27adc0729b7f51"
  },
  {
    "url": "use cases/index.html",
    "revision": "1e01eedd7b591630b716dd01754c6875"
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
