import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBiBsIpYmiZ35adOI1vOSbGpusgpV7U0gw",
  authDomain: "prematix-cbe3a.firebaseapp.com",
  projectId: "prematix-cbe3a",
  storageBucket: "prematix-cbe3a.appspot.com",
  messagingSenderId: "757284764200",
  appId: "1:757284764200:web:9a750ce1e0ddfc09d0531d",
};

const fireConfig = firebase.initializeApp(firebaseConfig);

export default fireConfig;
