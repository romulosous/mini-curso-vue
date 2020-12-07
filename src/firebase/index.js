import firebase from "firebase/app";
import 'firebase/analytics'

import "firebase/auth";
import "firebase/firestore";
// import "firebase/storage";
// import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBURfZp0E-_7QtlKAcrVVgDQRrfilVx5II",
  authDomain: "localhost-curso-vuejs-firebase.firebaseapp.com",
  projectId: "localhost-curso-vuejs-firebase",
  storageBucket: "localhost-curso-vuejs-firebase.appspot.com",
  messagingSenderId: "537900506628",
  appId: "1:537900506628:web:ce67d6f1850b9df05bdf51",
  measurementId: "G-WSTPEMHMHH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// export default firebaseApp

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}