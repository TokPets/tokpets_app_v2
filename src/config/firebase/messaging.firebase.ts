import * as firebase from 'firebase/app';

const messaging = firebase.messaging();
messaging.usePublicVapidKey('xxxxxxx');
messaging.requestPermission().then(() => {
    // tslint:disable-next-line: no-console
    console.log('Notification permission granted.');

    // Get Token
    messaging.getToken().then((token: any) => {
        // tslint:disable-next-line: no-console
        console.log(token);
    });

}).catch((err: any) => {
    // tslint:disable-next-line: no-console
    console.log('Unable to get permission to notify.', err);
});
