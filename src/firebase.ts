import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
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
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const registerWithEmailAndPassword = async (email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    authProvider: 'local',
    email,
  });
};

const logout = () => {
  signOut(auth);
};

export const getUserToken = async (user: User) => {
  const userToken = await user.getIdToken();
  return userToken;
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
