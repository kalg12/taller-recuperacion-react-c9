import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //Traemos la importación para trabajar con Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAbFtwXsNM15tlLDmEK_af7AH065Xh0P5Y",
  authDomain: "taller-recuperacion-c9.firebaseapp.com",
  projectId: "taller-recuperacion-c9",
  storageBucket: "taller-recuperacion-c9.appspot.com",
  messagingSenderId: "774394254917",
  appId: "1:774394254917:web:bda84605c61d6087d0352c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) //Exportamos nuestra configuración de firestore