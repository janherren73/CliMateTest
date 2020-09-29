import newbook from '../../components/NewBook/Newbook.vue'
export default {
  name: 'Home',
  components: {
    newbook
  },
  data() {
    return {
      snapData: [],
    };
  },
  created() {
    this.fireBaseGet();
  },
  methods: {
    // your methods here
    fireBaseGet() {
      this.$firestore.collection("DionetaBuecher").get().then((snapData) => {
        let lol = snapData.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      });
    },
  },
};
