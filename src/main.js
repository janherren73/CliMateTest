import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as firebase from 'firebase';


require('firebase/firestore');

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyCYdpqU2JsB-3vEqUhInFETvB4JtA3vq_M',
  authDomain: 'library-c179e.firebaseapp.com',
  databaseURL: 'https://library-c179e.firebaseio.com',
  projectId: 'library-c179e',
  storageBucket: 'library-c179e.appspot.com',
  messagingSenderId: '407548837547',
  appId: '1:407548837547:web:6f5cbc50195f0bf5ac01ee',
});

Vue.prototype.$firebase = firebase;
Vue.prototype.$firestore = firebase.firestore();





new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount('#app');




