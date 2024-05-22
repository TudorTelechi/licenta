import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {auth, firestore as db} from '../config/firebaseConfig';
import {useUserStore} from '../store/useUserStore';

export default function useFirebaseAuth() {
  const {session, user, setSession, setUser} = useUserStore();

  async function signInWithEmail(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return userCredential;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function signUpWithEmail(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return userCredential;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth);
      setSession(null);
      setUser(null);

      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function getUserProfile() {
    try {
      if (!session || !user) {
        throw new Error('No user on the session!');
      }

      const docSnap = await getDoc(doc(db, 'users', user.uid));

      return {
        data: docSnap.data(),
      };
    } catch (error) {
      return {error};
    }
  }

  async function updateUserProfile(
    username: string,
    fullName: string,
    avatarUrl: string,
  ) {
    try {
      if (!session || !user) {
        throw new Error('No user on the session!');
      }

      const updates = {
        id: user?.uid,
        username,
        full_name: fullName,
        avatar_url: avatarUrl,
        updated_at: new Date(),
      };

      await setDoc(doc(db, 'users', user.uid), updates, {
        merge: true,
      });

      return {
        error: null,
      };
    } catch (error) {
      return {error};
    }
  }

  return {
    signInWithEmail,
    signUpWithEmail,
    signOut,
    getUserProfile,
    updateUserProfile,
  };
}
