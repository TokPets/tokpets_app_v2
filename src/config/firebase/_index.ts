
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import 'firebase/messaging';

import ConfigFirebase from './config.firebase';

firebase.initializeApp(ConfigFirebase);

const firestore = firebase.firestore();
(window as any).firestore = firestore;

/*
const messaging = firebase.messaging();
(window as any).messaging = messaging;
*/
