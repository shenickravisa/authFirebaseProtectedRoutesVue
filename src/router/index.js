import Vue from 'vue'
import VueRouter from 'vue-router'
import registro from '@/views/registro'
import home from '@/views/home'
import ingreso from '@/views/ingreso'
var firebase = require('firebase/app')

Vue.use(VueRouter)

const routes = [

  {
    path: '/registro',
    name: 'registro',
    component: registro
  },
  {
    path: '/',
    name: 'home',
    component: home,
    meta: { requiresAuth: true }
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: ingreso
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  /*
  to
  */

  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth)
  // obtiene verdadero si existe usuario caso contrario obtiene un null
  const user = firebase.auth().currentUser
  if (rutaProtegida === true && user === null) {
    // si tiene ruta protegida y no hay usuario ve a ingreso
    next({ name: 'ingreso' })
  } else {
    // si no esta protegida te vas
    next()
  }
})

export default router
