import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import "firebase/compat/firestore";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDPojRFusuIzFFqaIOUusN1OjIbiRfOZ_4',
  authDomain: 'crud-app-f2d0f.firebaseapp.com',
  databaseURL: 'https://crud-app-f2d0f-default-rtdb.firebaseio.com',
  projectId: 'crud-app-f2d0f',
  storageBucket: 'crud-app-f2d0f.appspot.com',
  messagingSenderId: '76551342983',
  appId: '1:76551342983:web:8d212a18385d795671e122',
  measurementId: 'G-JW38GC08QX',
};

const app = firebase.initializeApp(firebaseConfig);


export const firebaseAuth = firebase.auth();

// export const firestore = firebase.firestore();

export const realtime = firebase.database();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(app);
export default firebase;
