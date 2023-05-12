import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAcdCCv7BJcpZOsbu5JMOSjtYU1t_RqyVI',
  authDomain: 'graphiql-app-85cfd.firebaseapp.com',
  projectId: 'graphiql-app-85cfd',
  storageBucket: 'graphiql-app-85cfd.appspot.com',
  messagingSenderId: '741568364286',
  appId: '1:741568364286:web:3f14b652a1595a8752afaf',
  measurementId: 'G-6L6FCTXCL4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if(err instanceof Error) {
      console.error(err);
      alert(err.message);
    }  
  }
};

const registerWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if(err instanceof Error) {
      console.error(err);
      alert(err.message);
    } 
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
