/* GateWise · Conexión a la nube (Firebase) — proyecto gatewise-demo */
window.GATEWISE_FIREBASE = {
  apiKey: "AIzaSyAKIGt-iVF0zbNJVJBYTqkrseV0b-1-1WM",
  authDomain: "gatewise-demo.firebaseapp.com",
  databaseURL: "https://gatewise-demo-default-rtdb.firebaseio.com",
  projectId: "gatewise-demo",
  storageBucket: "gatewise-demo.firebasestorage.app",
  messagingSenderId: "883032889982",
  appId: "1:883032889982:web:3f0891bfb5f47b7d77d62f"
};

/* Único Administrador de la APP: solo este correo puede entrar a la administración de la app */
window.GATEWISE_OWNER_EMAIL = "msalinas8811@gmail.com";

/* =====================================================================
   MODO DE LA APP
   "demo"        → como hasta hoy: datos de ejemplo, ideal para presentar.
   "produccion"  → base de datos segura (Firestore + Authentication).
   Cámbialo a "produccion" solo después de seguir PRODUCCION-LEEME.txt.
   ===================================================================== */
/* La app oficial funciona en PRODUCCIÓN. El demo privado (solo el dueño)
   se abre agregando ?demo al enlace; ?prod regresa a la app oficial. */
window.GATEWISE_MODO = (function () {
  try {
    const q = location.search;
    if (/[?&]prod\b/.test(q)) sessionStorage.removeItem('gw_modo_demo');
    if (/[?&]demo\b/.test(q)) sessionStorage.setItem('gw_modo_demo', '1');
    return sessionStorage.getItem('gw_modo_demo') === '1' ? 'demo' : 'produccion';
  } catch (e) { return 'produccion'; }
})();

/* Proyecto de producción gatewise-prod (Consola de Firebase › Configuración del proyecto › Tus apps › Web) */
window.GATEWISE_FIREBASE_PROD = {
  apiKey: "AIzaSyCZqW1sZ_bjYtLTm3tSKZ4_ffno9WMr6fA",
  authDomain: "gatewise-prod.firebaseapp.com",
  projectId: "gatewise-prod",
  storageBucket: "gatewise-prod.firebasestorage.app",
  messagingSenderId: "665057983425",
  appId: "1:665057983425:web:748bd65699ba0f06f04d40"
};

/* Clave pública de notificaciones (Cloud Messaging › Certificados push web) */
window.GATEWISE_VAPID = "PEGAR_CLAVE_VAPID";
