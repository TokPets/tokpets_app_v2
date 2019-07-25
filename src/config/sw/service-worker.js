
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


workbox.core.setCacheNameDetails({ prefix: "app-tokpets-v2" });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});



firebase.initializeApp({
    'messagingSenderId': '1034299822340'
});
const messaging = firebase.messaging();
messaging.onMessage(function (payload) {
    console.log('fB Message received. ', payload);
});



self.addEventListener('message', function (event) {
    console.log("SW Received Message: ");
    console.log(event.data);
});

self.addEventListener('push', function (event) {
    console.log("SW Received PUSH: ");
    console.log(event);
});