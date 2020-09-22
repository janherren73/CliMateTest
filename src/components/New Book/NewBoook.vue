<template>

    <div class="container">
      <div>
        <h1 class="titel">
          VueJs CRUD APP
        </h1>
        <div class="bookForm">
          <input type="text" v-model="this.buchname" placeholder="Name des Buches">
        </div>
        <div class="bookForm">
          <input type="text" v-model="this.autor" placeholder="Autor des Buches">
        </div>
        <div class="bookForm">
          <input type="text" v-model="this.beschreibung" placeholder="Beschreibung">
        </div>
        <div class="bookForm">
          <input type="text" v-model="this.rating" placeholder="Rating des Buches">
        </div>
        <div>
          <div class="button" v-if="this.checkForm(this.bookFire) === true">
            <button @click="fireBasePost(), this.fireBaseGet()">Submit Book</button>
          </div>
          <div class="errorMessage" v-else>
            <h1>Bitte fülle alle felder aus</h1>
          </div>
        </div>

        <div>


      </div>
      </div>
    </div>

</template>

<script>
import newbook from "../Home/Home";


export default {
  name: 'NewBoook',
  data(){
    return newbook
  },


  methods: {
    //Posting new Book to FireBase
    fireBasePost() {
      this.$firestore
          .collection('MaxBuecher')
          .doc()
          .set({
            //data that should go into the collection
            buchname: newbook.buchname,
            autor: newbook.autor,
            beschreibung: newbook.beschreibung,
            rating: newbook.rating,
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