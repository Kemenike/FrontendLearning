import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDO0DekMgA6iTp-Yjk2kWlOLcKvpuOAYGU",
  authDomain: "fir-practice-caefa.firebaseapp.com",
  projectId: "fir-practice-caefa",
  storageBucket: "fir-practice-caefa.appspot.com",
  messagingSenderId: "132809949687",
  appId: "1:132809949687:web:6b528664c6fe764d1caef2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();