import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery'
import  '../node_modules/popper.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import router from './router'

createApp(App).use(router).mount('#app')
window.addEventListener('contextmenu', function (e) {
    
    e.preventDefault();
   }, false);
