importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp(/.*(facebook\.(com|net)|googletagmanager\.com).*/),
  new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
  new RegExp(/.*\/images.*/),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "localImages-StaleWhileRevalidate"
  })
);

workbox.routing.registerRoute(
  new RegExp(/.*fontawesome.com.*/),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "fontawesome-StaleWhileRevalidate"
  })
);

workbox.routing.registerRoute(
  new RegExp(/.*gstatic.com.*/),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "gstatic.com-StaleWhileRevalidate"
  })
);

workbox.routing.registerRoute(
  new RegExp(/.*cdn.jsdelivr.net.*/),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "cdn.jsdelivr.net-StaleWhileRevalidate"
  })
);

workbox.routing.registerRoute(
  new RegExp(/.*fonts.googleapis.com.*/),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "fonts.googleapis.com-StaleWhileRevalidate"
  })
);

workbox.routing.registerRoute(
  new RegExp(/.*(css|png|js|svg).*/),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "misc-static-StaleWhileRevalidate"
  })
);

workbox.routing.registerRoute(
  new RegExp(/./),
  new workbox.strategies.NetworkFirst({
    cacheName: "default-NetworkFirst"
  })
);


