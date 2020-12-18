<template>
    <div class="container">
      <button @click="postStuffInFirebase()">Post Stuff</button>
      <button @click="fireBaseGet()">get Stuff</button>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      test: 'dies ist ein test',
      navOpen: false,
      stuff: {
        name: 'Dioneta',
        coolHeitsGrad: 5,
        haarFarbe: 'Gelb'
      }
    };
  },
  methods: {
    // your methods here
    postStuffInFirebase(){
      this.$firestore
          .collection('Hombre')
          .doc()
          .set(
              {
                name: 'Jan',
                haar: 'Blond',
                cool: 1
              }
          )
          .then(() => {
            alert('war gut');
          })
          .catch((error) => {
            // eslint-disable-next-line
            alert('nicht gut');
          });
    },
    fireBaseGet() {
      this.$firestore.collection("TestColl").get().then((hombre) => {
        let lol = hombre.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(lol)
      });
    },
  },
};

</script>
<style src="./Home.scss" lang="scss" scoped></style>
