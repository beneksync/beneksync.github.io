self.addEventListener('install', (e) => {
    e.waitUntil(
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
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
