/* Pedido X: permite instalar como aplicativo. Não guarda nada em cache: sempre busca a versão nova. */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
