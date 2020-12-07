<template>
  <div class="container">
    <section class="title">
      <h1>
        Vue JS Crud App
      </h1>
    </section>
    <section class="bookTable">
      <div>
      <ul>
        <thead>
          <tr>
            <th> Buchnam </th>
            <th> BuchAutor </th>
            <th> Beschreibung </th>
            <th> Rating </th>
          </tr>
        </thead>
        <tbody v-for="book in bookFire" :key="book.id" >
          <tr v-if="!book.edit">
            <td> {{ book.buchname }}</td>
            <td> {{ book.autor }}</td>
            <td> {{ book.beschreibung }}</td>
            <td> {{ book.rating }}</td>
            <td> <button @click="fireBaseDelete(book.id)">Delete</button></td>
            <td> <button @click="setEdit(book.id)">Edit</button></td>
            <td><router-link tag="button" :to="{name: 'Details', params:{id: book.id}}">Details</router-link></td>
          </tr>

          <tr v-else >
            <td> <input type="text" v-model="book.buchname"> </td>
            <td> <input type="text" v-model="book.autor"></td>
            <td> <input type="text" v-model="book.beschreibung"></td>
            <td> <input type="text" v-model="book.rating"></td>
            <td> <button @click="setCancel(book.id)">Cancel</button></td>
            <td> <button @click="checkForm(book),
            setUpdate(book.id, book.buchname, book.autor, book.beschreibung, book.rating, book.edit)">Save</button></td>
          </tr>
        </tbody>
      </ul>
    </div>


    </section>

    <div class="btn">
      <router-link tag="button" to="/newbook"> New Book </router-link>
    </div>



  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss"scoped>

</style>
