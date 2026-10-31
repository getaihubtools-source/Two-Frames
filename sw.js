/* دوقاب — Service Worker
   هر بار فایل‌های برنامه تغییر کرد، فقط عدد نسخه را بالا ببر. */
const V='duoframe-v2.4.0';
const SHELL=['./','index.html','app.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','fonts/Vazirmatn.woff2'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:'reload'})))));
});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>(k.startsWith('ccb-')||k.startsWith('duoframe-'))&&k!==V).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});

/* stale-while-revalidate: فوری از کش، و در پس‌زمینه تازه‌سازی */
function swr(key,req,evt){
  return caches.open(V).then(c=>c.match(key).then(hit=>{
    const net=fetch(req).then(res=>{if(res&&res.ok)c.put(key,res.clone());return res}).catch(()=>null);
    if(hit){evt.waitUntil(net);return hit}
    return net.then(r=>r||new Response('آفلاین',{status:503,statusText:'Offline'}));
  }));
}
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){
    // صفحهٔ معرفی (index.html) و خود برنامه (app.html) هرکدام پوستهٔ خودشان را دارند
    const key=u.pathname.endsWith('/app.html')?'app.html':'index.html';
    return e.respondWith(swr(key,r,e));
  }
  e.respondWith(swr(r,r,e));
});
