<template>
    <div class="container">
            <h1 class="title">
                Library CRUD App with Vue.js 
            </h1>
            <span class="bookForm">
                <label>Buchname: </label>
                <input type="text" class="form-control" v-model="newbook.buchname" placeholder="Name des Buches"/>
            </span>
            <span class="bookForm">
                <label>Autor: </label>
                <input type="text" class="form-control" v-model="newbook.autor" placeholder="Autor des Buches"/>
            </span>
            <span class="bookForm">
                <label>Beschreibung: </label>
                <input type="text" class="form-control" v-model="newbook.beschreibung" placeholder="Beschreibung"/>
            </span>
            <span class="bookForm">
                <label>Rating: </label>
                <input type="nummber" class="form-control" v-model="newbook.rating" placeholder="Rating des Buches"/>
            </span>
            <span>
                <div class="button" v-if="this.checkForm(this.newbook) === true">
                    <button @click="fireBasePost()">Submit Book</button>
                </div>
                <div v-else class="errorMessage">
                    <h1>Fülle alle Felder aus.</h1>
                </div>
            </span>
    </div>
        <!-- <table>
            <thead>
                <tr>
                    <th>Buchname</th>
                    <th>Autor</th>
                    <th>Beschreibung</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody v-for="b in book" :key="b.id">
                <tr>
                    <td>{{b.buchname}}</td>
                    <td>{{b.autor}}</td>
                    <td>{{b.beschreibung}}</td>
                    <td>{{b.rating}}</td>
                </tr>

            </tbody>

        </table>  -->
</template>
<script>

import newbook from "../../views/Home/Home.vue";

export default {
name: 'Newbook',
data() {
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
    computed: {

    },
    methods: {

        //Posting new Book to FireBase
        fireBasePost() {
        this.$firestore
            .collection('DionetaBuecher')
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
                alert("Book added successfully.");
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
        }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  background-image: url(https://i.pinimg.com/736x/18/39/ce/1839cefbaa51cd3eb5c151dbdda1cfab.jpg);
  background-color: rgb(35,99,71,0.3);
  max-width: 900px;
  margin: auto;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  }
  .title {
      color:white;
      background-color: rgba(99, 87, 35, 0.8);
      font-style:oblique;
      font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .bookForm{
    padding: 5px;
    background-color: rgb(99,87,35,0.6);
    font-style: bold;
  }
  button {
    margin: 0.5rem;
    border: 2px solid black;
  }
  button:hover {
    background-color: lavender;
  }
  .errorMessage {
    background-color: lavenderblush;
    font-size: 5px;
    width: 25vw;
    margin: auto;
  }
</style>


