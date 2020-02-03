import { mapActions, mapState } from 'vuex'
export default {
  name: 'ingreso',
  components: {},
  props: [],
  data () {
    return {
      email: '',
      data: {
        password: ''
      },
      validForm: false,
      nameRules: [
        v => !!v || 'Data is required',
        v => v.length <= 20 || 'Name must be less than 10 characters'
      ]
    }
  },
  computed: {
    ...mapState(['error'])
  },
  mounted () {

  },
  methods: {
    ...mapActions(['ingresoUsuario']),
    logIn () {
      this.ingresoUsuario({ email: this.email, password: this.data.password })
    }
  }
}
