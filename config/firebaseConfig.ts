import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCACR_xu3fiAntx-MLq9P6O3eF2SgXWGBk',
  authDomain: 'licenta-tudor.firebaseapp.com',
  projectId: 'licenta-tudor',
  storageBucket: 'licenta-tudor.appspot.com',
  messagingSenderId: '496164310007',
  appId: '1:496164310007:web:be1e88a6827174670a3cf2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = initializeFirestore(app, {
  localCache: {
    kind: 'memory',
  },
});
const storage = getStorage(app);

export {app, auth, firestore, storage};
