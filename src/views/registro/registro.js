import { mapActions, mapState } from 'vuex'
export default {
  name: 'registro',
  components: {},
  props: [],
  data () {
    return {
      email: '',
      data: {
        password: '',
        repeatPassword: ''
      },
      validForm: false,
      nameRules: [
        v => !!v || 'Data is required',
        v => v.length <= 20 || 'Name must be less than 10 characters'
      ],
      samePassword: false,
      snackbar: false,
      text: 'Registro guardado correctamente',
      timeout: 2000
    }
  },
  computed: {
    ...mapState(['error']),
    samePasswordComputed () {
      return this.data.password === this.data.repeatPassword && this.data.password !== ''
    }
  },
  created () {
  },
  methods: {
    ...mapActions(['crearUsuario']),
    userRegister () {
      this.crearUsuario({ email: this.email, password: this.data.password })
      this.snackbar = true
      document.getElementById('myform').reset()
      this.samePassword = false
      this.email = ''
      this.data.password = ''
      this.data.repeatPassword = ''
    }
  }
  /*
  watch: {
    data: {
      handler (val) {
        console.log(val.password, val.repeatPassword)
        if (val.password === val.repeatPassword && val.password !== '' && val.repeatPassword !== '') {
          console.log('entro')
          this.samePassword = true
        } else {
          console.log('no entro')
          this.samePassword = false
        }
      },
      deep: true
    }
  }
  */
}
