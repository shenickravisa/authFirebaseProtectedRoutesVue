import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
var firebase = require('firebase/app')
console.log(firebase)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: ''
  },
  mutations: {
    // payload es cualquier parametro que reciba nuestra app
    setUser (state, payload) {
      state.usuario = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    crearUsuario ({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
          console.log(data)
          commit('setUser', { email: data.user.email, uid: data.user.uid })
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error.message)
        })
    },
    ingresoUsuario ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
          console.log(data)
          commit('setUser', { email: data.user.email, uid: data.user.uid })
          router.push({
            name: 'home'
          })
        })
        .catch(error => {
          console.log(error)
          commit('setError', error.message)
        })
    },
    detectarUsuario ({ commit }, payload) {
      if (payload !== null) {
        commit('setUser', { email: payload.email, uid: payload.uid })
      } else {
        commit('setUser', null)
      }
    },
    cerrarSesion ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push({
        name: 'ingreso'
      })
    }
  },
  modules: {}
})
