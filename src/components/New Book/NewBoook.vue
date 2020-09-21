<template>

    <div class="container">

      <div>
        <h1 class="titel">
          VueJs CRUD APP
        </h1>
      <div class="bookForm">
        <input type="text" v-model="newBook.buchname" placeholder="Name des Buches">
      </div>
      <div class="bookForm">
        <input type="text" v-model="newBook.autor" placeholder="Autor des Buches">
      </div>
      <div class="bookForm">
        <input type="text" v-model="newBook.beschreibung" placeholder="Beschreibung">
      </div>
      <div class="bookForm">
        <input type="text" v-model="newBook.rating" placeholder="Rating des Buches">
      </div>
        <div>
          <div class="button" v-if="checkForm() === true">
            <button @click="fireBasePost(), fireBaseGet()">Submit Book</button>
          </div>
          <div class="errorMessage" v-else>
            <h1>Bitte fülle alle felder aus</h1>
          </div>
        </div>


      <div>
        <button v-on:click="fireBaseGet()">click to open Booklist</button>
        <div>
          <ul>
            <thead>
            <tr>
              <th> Buchname </th>
              <th> BuchAutor </th>
              <th> Beschreibung </th>
              <th> Rating </th>
            </tr>
            </thead>
            <tbody v-for="book in fireBooks" :key="book.id" >
              <tr v-if="!book.edit">
                  <td> {{ book.buchname }}</td>
                  <td> {{ book.autor }}</td>
                  <td> {{ book.beschreibung }}</td>
                  <td> {{ book.rating }}</td>
                  <td> <button @click="fireBaseDelete(book.id), fireBaseGet()">Delete</button></td>
                  <td> <button @click="setEdit(book.id), fireBaseGet()">Edit</button></td>

              </tr>
              <tr v-else >
                <td> <input type="text" v-model="book.buchname"> </td>
                <td> <input type="text" v-model="book.autor"></td>
                <td> <input type="text" v-model="book.beschreibung"></td>
                <td> <input type="text" v-model="book.rating"></td>
                <td> <button @click="setCancel(book.id), fireBaseGet()">Cancel</button></td>
                <td> <button @click="setUpdate(book.id, book.buchname, book.autor, book.beschreibung, book.rating, book.edit)">Save</button></td>

              </tr>
            </tbody>


          </ul>
        </div>
      </div>
      </div>
    </div>

</template>

<script>

export default {
  data(){
    return{
      fireBooks: [],
      newBook: {
        edit: false,
        id: '',
        buchname: '',
        autor: '',
        beschreibung: '',
        rating: 0,
      },
    }
  },


  methods: {
    checkForm () {
      return (this.newBook.buchname.length > 2) && (this.newBook.autor.length > 2) && (this.newBook.beschreibung.length > 2)
          && ((this.newBook.rating > 0) && (this.newBook.rating < 10.1));
    },

    checkTable() {
      if {}
    }


    fireBasePost() {
      this.$firestore
          .collection('MaxBuecher')
          .doc()
          .set({
            //data that should go into the collection
            buchname: this.newBook.buchname,
            autor: this.newBook.autor,
            beschreibung: this.newBook.beschreibung,
            rating: this.newBook.rating,
            edit: false,
          })
          .then(() => {
            console.log("Post successful")
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log("Error posting: ", error);
          });
    },

    fireBaseGet() {
      this.$firestore.collection("MaxBuecher").get().then((querySnapshot) => {
        this.fireBooks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        // querySnapshot.forEach((doc) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        //   this.fireBooks.push({ id: doc.id, ...doc.data() });
        //
        // });
      });
    },

    fireBaseDelete(id) {
      this.$firestore.collection("MaxBuecher").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    },

    setEdit(id) {
      this.$firestore.collection("MaxBuecher").doc(id).update({edit: true});
    },

    setCancel(id) {
      this.$firestore.collection("MaxBuecher").doc(id).update({edit: false});
    },

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
    }
  }

}


</script>

<style scoped>


table {
  border-collapse: collapse;
}
table,
td,
th{
  border: 1px solid black;
}
.errorMessage {
  background-color: bisque;
  font-size: 5px;
  width: 25vw;
  margin: auto;
}

.container {
  display: flex;
  background-color: beige;
  max-width: 900px;
  margin: auto;
  height: 100vh;
  justify-content: center;

}

.bookForm{
  padding: 5px;
}

button {
  margin: 0.5rem;
  border: 2px solid black;
}

button:hover {
  background-color: beige;
}

</style>