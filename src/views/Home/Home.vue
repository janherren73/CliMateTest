<template>
  <body>
    <div class="container">
      <h1>Library</h1>
      <table>
        <thead>
          <tr>
            <th>Buchname</th>
            <th>BuchAutor</th>
            <th>Beschreibung</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody v-for="book in bookFire" :key="book.id">
          <tr v-if="!book.edit">
            <td>{​​​​​{​​​​​ book.buchname }​​​​​}​​​​​</td>
            <td>{​​​​​{​​​​​ book.autor }​​​​​}​​​​​</td>
            <td>{​​​​​{​​​​​ book.beschreibung }​​​​​}​​​​​</td>
            <td>{​​​​​{​​​​​ book.rating }​​​​​}​​​​​</td>
            <td><button @click="fireBaseDelete(book.id)">Delete</button></td>
            <td><button @click="setEdit(book.id)">Edit</button></td>
            <td>
              <!-- <router-link
                tag="button"
                :to="{​​​​​ name: 'Details', params: {​​​​​id: book.id}​​​​​ }​​​​​"
                >Details</router-link
              > -->
            </td>
          </tr>
          <tr v-else>
            <td><input type="text" v-model="book.buchname" /></td>
            <td><input type="text" v-model="book.autor" /></td>
            <td><input type="text" v-model="book.beschreibung" /></td>
            <td><input type="text" v-model="book.rating" /></td>
            <td><button @click="setCancel(book.id)">Cancel</button></td>
            <td>
              <button
                @click="
                  checkForm(this.bookFire),
                    setUpdate(
                      book.id,
                      book.buchname,
                      book.autor,
                      book.beschreibung,
                      book.rating,
                      book.edit
                    )
                "
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</template>
<script>

import Newbook from '../../components/NewBook/Newbook.vue'

export default {​​​​​

  name: 'Home',
  data() {​​​​​
    return {​​​​​
        bookFire: [],
        newBook: {​​​​​
            edit: false,
            id: '',
            buchname: '',
            autor: '',
            beschreibung: '',
            rating: 0,
        }​​​​​,
    }​​​​​;
  }​​​​​,
  created() {​​​​​
    this.fireBaseGet();
  }​​​​​,
  methods: {​​​​​
      //Fetching Data from Firestore
        fireBaseGet() {​​​​​
            this.$firestore.collection("MaxBuecher").get().then((querySnapshot) => {​​​​​
                this.bookFire = querySnapshot.docs.map(doc => ({​​​​​ id: doc.id, ...doc.data() }​​​​​))
            }​​​​​);
        }​​​​​,
      //Delete Book
      fireBaseDelete(id) {​​​​​
          this.$firestore.collection("MaxBuecher").doc(id).delete().then(() => {​​​​​
              console.log("Document successfully deleted!");
          }​​​​​).catch((error) => {​​​​​
              console.error("Error removing document: ", error);
          }​​​​​);
          this.fireBaseGet();
      }​​​​​,
      //Update Book
      setUpdate(id, buchname, autor, beschreibung, rating, edit) {​​​​​
          this.$firestore.collection("MaxBuecher").doc(id)
              .update({​​​​​
                  //data that should go into the collection
                  buchname: buchname,
                  autor: autor,
                  beschreibung: beschreibung,
                  rating: rating,
                  edit: edit = false,
              }​​​​​).then(() => {​​​​​
              this.fireBaseGet();
              console.log("Buch wurde upgedated");
          }​​​​​).catch((error) => {​​​​​
              console.error("Buch konnte nicht upgedated werden: ", error);
          }​​​​​);
          this.fireBaseGet();
      }​​​​​,
      setEdit(id) {​​​​​
          this.$firestore.collection("MaxBuecher").doc(id).update({​​​​​edit: true}​​​​​);
          this.fireBaseGet();
      }​​​​​,
      setCancel(id) {​​​​​
          this.$firestore.collection("MaxBuecher").doc(id).update({​​​​​edit: false}​​​​​);
          this.fireBaseGet();
      }​​​​​,
      checkForm (val) {​​​​​
          return (val.buchname.length > 2) &&
              (val.autor.length > 2) &&
              (val.beschreibung.length > 2) &&
              ((val.rating > 0) && (val.rating < 10.1));
      }​​​​​,
  }​​​​​
}​​​​​;
</script>
<style src="./Home.scss" lang="scss" scoped></style>
