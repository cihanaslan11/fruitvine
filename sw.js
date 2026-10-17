// Fruit Vine – çevrimdışı çalışma için önbellek görevlisi (service worker)
// Yeni bir sürüm yüklediğinde VERSION değerini artır; oyuncular bir sonraki açılışta güncellemeyi alır.
const VERSION = 'fv-0.41';
const FILES = ["./", "index.html", "manifest.webmanifest", "privacy.html", "terms.html", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "fonts/fonts.css", "fonts/fredoka-latin-500-normal.woff2", "fonts/fredoka-latin-600-normal.woff2", "fonts/fredoka-latin-700-normal.woff2", "fonts/fredoka-latin-ext-500-normal.woff2", "fonts/fredoka-latin-ext-600-normal.woff2", "fonts/fredoka-latin-ext-700-normal.woff2", "fonts/nunito-latin-700-normal.woff2", "fonts/nunito-latin-800-normal.woff2", "fonts/nunito-latin-900-normal.woff2", "fonts/nunito-latin-ext-700-normal.woff2", "fonts/nunito-latin-ext-800-normal.woff2", "fonts/nunito-latin-ext-900-normal.woff2", "fonts/press-start-2p-latin-400-normal.woff2", "fonts/press-start-2p-latin-ext-400-normal.woff2"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  // Oyun dosyası: önce ağ (güncel sürüm), ağ yoksa önbellek. Diğer dosyalar: önce önbellek.
  if (e.request.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cp = res.clone(); caches.open(VERSION).then(c => c.put(e.request, cp)); return res; })));
});
