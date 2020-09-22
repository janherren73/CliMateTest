import NewBoook from "../New Book/NewBoook";

export default {
  name: 'Home',

  data() {
    return {
        bookFire: [],
        newBook: {
            edit: false,
            id: '',
            buchname: '',
            autor: '',
            beschreibung: '',
            rating: 0,
        },
    };
  },

  created() {
    this.fireBaseGet();
  },

  methods: {


      //Fetching Data from Firestore
      fireBaseGet() {
          this.$firestore.collection("MaxBuecher").get().then((querySnapshot) => {
              this.bookFire = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          });
      },


      //Delete Book
      fireBaseDelete(id) {
          this.$firestore.collection("MaxBuecher").doc(id).delete().then(() => {
              console.log("Document successfully deleted!");
          }).catch((error) => {
              console.error("Error removing document: ", error);
          });
          this.fireBaseGet();
      },

      //Update Book
      setUpdate(id, buchname, autor, beschreibung, rating, edit) {

          this.$firestore.collection("MaxBuecher").doc(id)
              .update({
                  //data that should go into the collection
                  buchname: buchname,
                  autor: autor,
                  beschreibung: beschreibung,
                  rating: rating,
                  edit: edit = false,
              }).then(() => {
              this.fireBaseGet();
              console.log("Buch wurde upgedated");

          }).catch((error) => {
              console.error("Buch konnte nicht upgedated werden: ", error);
          });
          this.fireBaseGet();
      },

      setEdit(id) {
          this.$firestore.collection("MaxBuecher").doc(id).update({edit: true});
          this.fireBaseGet();
      },

      setCancel(id) {
          this.$firestore.collection("MaxBuecher").doc(id).update({edit: false});
          this.fireBaseGet();
      },

      checkForm (val) {
          return (val.buchname.length > 2) &&
              (val.autor.length > 2) &&
              (val.beschreibung.length > 2) &&
              ((val.rating > 0) && (val.rating < 10.1));
      },

  }
};
