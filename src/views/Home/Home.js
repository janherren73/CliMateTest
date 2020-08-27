export default {
  name: 'Home',
  methods: {
    fireBasePostExample() {
      this.$firestore
        .collection('ColectionName')
        .doc()
        .set({
          //data that should go into the collection
        })
        .then(() => {})
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
  },
};
