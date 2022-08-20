import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery'
import  '../node_modules/popper.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import router from './router'
import firebase from "firebase"




const firebaseConfig = {
  apiKey: "AIzaSyAtyYGtheXrCaPgOeAbZlhU4EoOKS7fgBM",
  authDomain: "wild-841d8.firebaseapp.com",
  projectId: "wild-841d8",
  storageBucket: "wild-841d8.appspot.com",
  messagingSenderId: "149227905272",
  appId: "1:149227905272:web:ff00f72e6ae107af079b0d"
};



 firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
// window.addEventListener('contextmenu', function (e) {
    
//     e.preventDefault();
//    }, false);
