import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// add firebase
var firebase = require('firebase/app')

Vue.config.productionTip = false
require('firebase/auth')
require('firebase/firestore')

var firebaseConfig = {
  apiKey: 'AIzaSyAFiKezQHJ4K5wuGYnga2Wqx6cCop5C-SA',
  authDomain: 'fir-auth-c7234.firebaseapp.com',
  databaseURL: 'https://fir-auth-c7234.firebaseio.com',
  projectId: 'fir-auth-c7234',
  storageBucket: 'fir-auth-c7234.appspot.com',
  messagingSenderId: '46047562855',
  appId: '1:46047562855:web:b96727136ede46c2c1d8c2',
  measurementId: 'G-335NGTB55E'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// observar si hay usuario
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // llamar un accion
    store.dispatch('detectarUsuario', { email: user.email, uid: user.uid })
  } else {
    store.dispatch('detectarUsuario', null)
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
