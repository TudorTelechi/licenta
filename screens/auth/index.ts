export {default as LoginScreen} from './LoginScreen';
export {default as SignupScreen} from './SignupScreen';
export {default as WelcomeScreen} from './WelcomeScreen';
export {auth, db};
import {initializeApp} from '@firebase/app';
import {getAuth} from '@firebase/auth';
import {getFirestore} from '@firebase/firestore';

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
const db = getFirestore(app);
