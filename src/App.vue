<template>
  <div id="app">
    <Home/>
    <router-view/>
  </div>
</template>


<script>
import Home from "@/views/Home/Home";
import Card from "./components/Card/Card";


export default {
  components: {Home, Card},
  data () {
    return {
      message: 'Hey'
    }
  }
}

</script>

<style>
@import url('./assets/general.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>