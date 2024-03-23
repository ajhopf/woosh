// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";


export const firebaseConfig = {
  apiKey: "AIzaSyBEAZXs1lhtFD_OhSEi13yaxiPVepkpnc8",
  authDomain: "woosh-85018.firebaseapp.com",
  projectId: "woosh-85018",
  storageBucket: "woosh-85018.appspot.com",
  messagingSenderId: "164721933250",
  appId: "1:164721933250:web:22cc7c0f4744145a88345b"
};

const app = initializeApp(firebaseConfig);
// const storage = getStorage();
// export const storageRef = ref(storage);

export default app;