
import * as firebase from 'firebase/app';

const messaging = firebase.messaging();
const messagingPublicKey = 'BLqXfDySoK_0PkM33_Dv4-gaLHw248P4eVrDq_BSb24GGHVkOGn1rFKNGGucRqgvkSSz3dWKMLBS47r37lDp5hY';
messaging.usePublicVapidKey(messagingPublicKey);
Notification.requestPermission().then(function (permission) {
    messaging.getToken().then((token: any) => {
        // tslint:disable-next-line: no-console
        console.log('FCM from PWA :: token');
        console.log(token);
    });
}).catch((err: any) => {
    console.log('Unable to get permission to notify.', err);
});
