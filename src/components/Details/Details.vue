<template>
  <div :class="{'red' : isRed}">
    <table>
      <thead>
        <tr>
          <th>Buchname</th>
          <th>Autor</th>
          <th>Beschreibung</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{book.buchname}}</td>
          <td>{{book.autor}}</td>
          <td>{{book.beschreibung}}</td>
          <td>{{book.rating}}</td>
          <router-link tag="button" @click="this.fireBaseDelete()" to="/">Delete</router-link>
        </tr>
      </tbody>
    </table>
    <router-link tag="button" :to="{name: 'home'}">Zurück</router-link>
  </div>

</template>

<script>


export default {
  name: 'Details',
  data() {
    return {
      book: {
        edit: false,
        id: '',
        buchname: '',
        autor: '',
        beschreibung: '',
        rating: 0,
      },
      isRed: false,
    };
  },

  async created() {
    const snapshot = await this.$firestore.collection('MaxBuecher').doc(this.$route.params.id).get();
    this.book = snapshot.data();
  },

  methods: {
    //Delete Book

    fireBaseDelete(id) {
      this.$firestore.collection("MaxBuecher").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
      this.fireBaseGet();
    },
  }
}
</script>


<style lang="scss" scoped>
.red{
  background-color: red;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style> 