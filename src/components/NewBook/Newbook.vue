<template>
    <div class="container">
        <div>
            <h1 class="title">
                Library CRUD App with Vue.js 
            </h1>
            <span class="bookForm">
                <input type="text" v-module="book.buchname" placeholder="Name des Buches">
            </span>
            <span class="bookForm">
                <input type="text" v-module="book.autor" placeholder="Autor des Buches">
            </span>
            <span class="bookForm">
                <input type="text" v-module="book.beschreibung" placeholder="Beschreibung">
            </span>
            <span class="bookForm">
                <input type="text" v-module="book.rating" placeholder="Rating des Buches">
            </span>
            <span>
                <span class="button" v-if="checkForm(book) === true">
                    <button @click="fireBasePost()">Submit Book</button>
                </span>
                <span class="errorMessage" v-else>
                    <h1>Flülle alle Felder aus.</h1>
                </span>
                <router-link tag="button" :to="{name: 'home'}">Zurück</router-link>
            </span>
        </div>
        <table>
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

        </table> 
    </div>
</template>
<script>

export default {
name: 'Newbook',
data(){
    return {
        book: {
            edit: false,
            id: '',
            buchname: '',
            autor: '',
            beschreibung: '',
            rating: 0,
        }
    }

  },


    methods: {

        //Posting new Book to FireBase
        fireBasePost() {
        this.$firestore
            .collection('DionetaBuecher')
            .doc()
            .set({
                //data that should go into the collection
                buchname: this.book.buchname,
                autor: this.book.autor,
                beschreibung: this.book.beschreibung,
                rating: this.book.rating,
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
  background-color: lavender;
  max-width: 900px;
  margin: auto;
  height: 100vh;
  justify-content: center;
}
  .title {
      color: #908;
  }
  .bookForm{
    padding: 5px;
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


