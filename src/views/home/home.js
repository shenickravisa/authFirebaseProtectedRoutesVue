import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['usuario'])
  },
  mounted () {

  },
  methods: {

  }
}
