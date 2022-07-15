self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('1-klasa-store').then((cache) => cache.addAll([
        '/EmilkaApp/',
        '/EmilkaApp/index.html',
        '/EmilkaApp/index.js',
        '/EmilkaApp/assets/finger-one.jpg',
        '/EmilkaApp/assets/finger-two.jpg',
        '/EmilkaApp/assets/finger-three.jpg',
        '/EmilkaApp/assets/finger-four.jpg',
        '/EmilkaApp/assets/finger-five.jpg'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });