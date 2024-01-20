import {initializeApp} from '@firebase/app';
import {getAuth} from '@firebase/auth';
import {initializeFirestore} from '@firebase/firestore';

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

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

const auth = getAuth(app);
console.log({auth});

const firestore = initializeFirestore(app, {
  localCache: {
    kind: 'memory',
  },
});

export {app, auth, firestore};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
