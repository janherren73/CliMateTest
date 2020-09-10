<template>
  <body>
    <div class="container">
      <router-link tag="h1" to="/name"></router-link>
      <h1 @click="navOpen = !navOpen">Library</h1>
      <div v-if="navOpen">
        <h2>Search</h2>
        <h3>Audio / Video</h3>
        <h3>Books / E-Books</h3>
        <h3>Images</h3>
        <h3>Magazine articles</h3>
        <h3>Manuscripts</h3>
        <h3>Newspapers</h3>
        <h3>Official Publications</h3>
        <h3>Sheet Music</h3>
        <h3>Statistics</h3>
        <h3>University Theses</h3>
      </div>
    </div>
  </body>
</template>
<script src="./Home.js"></script>
<style src="./Home.scss" lang="scss" scoped></style>
