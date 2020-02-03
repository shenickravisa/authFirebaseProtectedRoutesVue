<template>
  <v-app>
    <v-bottom-navigation v-model="bottomNav" dark shift>
      <span style="padding-right:10px" @click="goTo('register')">Registro</span>
      <span style="padding-right:10px" @click="goTo('logIn')">Ingreso</span>
      <span style="padding-right:10px" @click="closeSession">Cerrar sesión</span>
    </v-bottom-navigation>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',

  components: {},
  data () {
    return {
      bottomNav: 3
    }
  },
  methods: {
    ...mapActions(['cerrarSesion']),
    goTo (data) {
      if (data === 'register') {
        this.$router.push('/registro')
      } else if (data === 'logIn') {
        this.$router.push('/ingreso')
      }
    },
    closeSession () {
      this.cerrarSesion()
    }
  }
}
</script>
