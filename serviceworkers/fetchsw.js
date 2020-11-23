const cacheName = "v1";

const cacheAssets = [
    'index.html',
    'app.js',
    'style.css'
]

this.addEventListener('install', (e) => {
    console.log('Service worker: installed');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(co => {
                console.log('Service worker caching files');
                co.addAll(cacheAssets).catch(e => console.log);
                console.log('End caching')
            })
            .then(() => self.skipWaiting())
            .catch(console.log));
});

this.addEventListener('activate', (e) => {
    console.log('Service worker: activated');
});