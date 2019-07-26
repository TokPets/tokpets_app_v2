
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

import ConfigFirebase from './config.firebase';


firebase.initializeApp(ConfigFirebase);
