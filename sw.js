self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('1-klasa-store').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/index.js',
        '/assets/finger-one.jpg',
        '/assets/finger-two.jpg',
        '/assets/finger-three.jpg',
        '/assets/finger-four.jpg',
        '/assets/finger-five.jpg'
      ])),
    );
  });
self.addEventListener('activate', (event) => {
  console.log('V1 now ready to handle fetches!');
})

self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(
    //caches.match(event.request).then((response) => response || fetch(event.request))
    caches.match(event.request).then((response) => fetch(event.request))
  );
});