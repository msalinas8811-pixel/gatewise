/* GateWise · notificaciones push en segundo plano
   No carga archivos de otros servidores (los teléfonos lo bloquean):
   la página obtiene el permiso y el token, y aquí solo se muestra el aviso. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { notification: { body: e.data ? e.data.text() : '' } }; }
  const n = d.notification || {};
  const datos = d.data || {};
  const link = (d.fcmOptions && d.fcmOptions.link) || n.click_action || datos.link || new URL('../', self.registration.scope).href;
  e.waitUntil(self.registration.showNotification(n.title || datos.titulo || 'GateWise', {
    body: n.body || datos.texto || '',
    icon: new URL('../icon-192.png', self.registration.scope).href,
    badge: new URL('../icon-192.png', self.registration.scope).href,
    tag: d.fcmMessageId || undefined,
    data: { link },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const destino = (e.notification.data && e.notification.data.link) || new URL('../', self.registration.scope).href;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(l => {
    for (const c of l) { if (c.url.startsWith(new URL('../', self.registration.scope).href) && 'focus' in c) return c.focus(); }
    return clients.openWindow(destino);
  }));
});
