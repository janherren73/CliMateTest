<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import Details from "@/components/Details/Details";
import Home from "@/components/Home/Home";
import NewBook from "@/components/New Book/NewBoook";


export default {
  components: {Home},
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