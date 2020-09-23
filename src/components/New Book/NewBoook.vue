<template>

    <div class="container">
      <div>
        <h1 class="titel">
          VueJs CRUD APP
        </h1>
        <div class="bookForm">
          <input type="text" v-model="newbook.buchname" placeholder="Name des Buches">
        </div>
        <div class="bookForm">
          <input type="text" v-model="newbook.autor" placeholder="Autor des Buches">
        </div>
        <div class="bookForm">
          <input type="text" v-model="newbook.beschreibung" placeholder="Beschreibung">
        </div>
        <div class="bookForm">
          <input type="text" v-model="newbook.rating" placeholder="Rating des Buches">
        </div>
        <div>
          <div class="button" v-if="checkForm(newbook) === true">
            <button @click="fireBasePost()">Submit Book</button>
          </div>
          <div class="errorMessage" v-else>
            <h1>Bitte fülle alle felder aus</h1>
          </div>
          <router-link tag="button" :to="{name: 'home'}">Zurück</router-link>
        </div>

        <div>


      </div>
      </div>
    </div>

</template>

<script>



export default {
  name: 'NewBook',
  data(){
    return {
      newbook: {
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
    //Posting new Book to FireBase
    fireBasePost() {
      this.$firestore
          .collection('MaxBuecher')
          .doc()
          .set({
            //data that should go into the collection
            buchname: this.newbook.buchname,
            autor: this.newbook.autor,
            beschreibung: this.newbook.beschreibung,
            rating: this.newbook.rating,
            edit: false,
          })
          .then(() => {
            console.log("Post successful");
            alert("Book addad successfully.");
            this.$router.push("/");
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log("Error posting: ", error);
          });

    },

    checkForm (val) {
      return (val.buchname.length > 2) &&
          (val.autor.length > 2) &&
          (val.beschreibung.length > 2) &&
          ((val.rating > 0) && (val.rating < 10.1));
    },
  }
}


</script>

<style lang="scss" scoped>


.container {
  display: flex;
  background-color: beige;
  max-width: 900px;
  margin: auto;
  height: 100vh;
  justify-content: center;

  .title {
    color: red;
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

  .errorMessage {
    background-color: bisque;
    font-size: 5px;
    width: 25vw;
    margin: auto;
  }
}
</style>

