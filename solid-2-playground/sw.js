/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-10a9faf1'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "vite-icon.svg",
    "revision": "0b821752a697f80881771dbb3615e86e"
  }, {
    "url": "pwa-512x512.png",
    "revision": "0bf00eff2a5e75e71ea0066ce6f09895"
  }, {
    "url": "pwa-192x192.png",
    "revision": "0f49a4c60e1340217a84299b3b55756b"
  }, {
    "url": "logo.svg",
    "revision": "8a66d423b9275303b51ab275e94e929e"
  }, {
    "url": "index.html",
    "revision": "1a7db4f01d6e4773afea8563accf916d"
  }, {
    "url": "favicon.ico",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "0f49a4c60e1340217a84299b3b55756b"
  }, {
    "url": "assets/workbox-window.prod.es5-BIl4cyR9.js",
    "revision": null
  }, {
    "url": "assets/lsp.worker-D-LPPt2h.js",
    "revision": null
  }, {
    "url": "assets/index-Du2Q15N_.css",
    "revision": null
  }, {
    "url": "assets/index-DG0zaARQ.js",
    "revision": null
  }, {
    "url": "assets/compiler-CJlCuMS_.js",
    "revision": null
  }, {
    "url": "assets/NetVimEditor-DWX5OK_h.js",
    "revision": null
  }, {
    "url": "assets/MonacoEditor-Cv3DOECJ.js",
    "revision": null
  }, {
    "url": "https://esm.sh/solid-js@2.0.0-experimental.15",
    "revision": null
  }, {
    "url": "https://esm.sh/@solidjs/web@2.0.0-experimental.15",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "0f49a4c60e1340217a84299b3b55756b"
  }, {
    "url": "favicon.ico",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }, {
    "url": "logo.svg",
    "revision": "8a66d423b9275303b51ab275e94e929e"
  }, {
    "url": "manifest.json",
    "revision": "7600b9694b21f3f441cbc347ca1a01a3"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/i, new workbox.NetworkFirst({
    "cacheName": "cloudflare-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/esm\.sh\/.*/i, new workbox.NetworkFirst({
    "cacheName": "esm-sh-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 20,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
