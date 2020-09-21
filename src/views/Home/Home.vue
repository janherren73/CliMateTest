<template>
  <div class="container">
    <h1>Library</h1>
    <div id="buecherTitel">
      Bücher
    </div>
    <table>
      <thead>
        <th>Name</th>
        <th>Autor</th>
        <th>Beschreibung</th>
        <th>Rating</th>
      </thead>
      <tbody class="v-for-object">
        <tb v-for="(value, name) in NewBook">{{name}}: {{value}} </tb>
        <tb></tb>
        <tb></tb>
        <tb></tb>
      </tbody>
    </table>
    <div class="column">
      <div class="buecher">
        <ol>
          <ul class="v-for-object" >
            <li v-for="(value, name) in Book">
              {{name}}: {{value}}
            </li>
          </ul>
        </ol>
      </div>
      <div class="buecher1">
        <ol>
          <ul class="v-for-object" >
            <li v-for="(value, name) in Book">
              {{name}}: {{value}}
            </li>
          </ul>
        </ol>
      </div>
      <div class="buecher2">
        <ol>
          <ul class="v-for-object" >
            <li v-for="(value, name) in Book">
              {{name}}: {{value}}
            </li>
          </ul>
        </ol>
      </div>
      <div class="buecher3">
        <ol>
          <ul class="v-for-object" >
            <li v-for="(value, name) in Book">
              {{name}}: {{value}}
            </li>
          </ul>
        </ol>
      </div>
    </div>


  </div>
</template>
<script src="./Home.js"></script>
<style scoped>
  table, th, tb {
    border: 1px black solid;
  }
</style>
