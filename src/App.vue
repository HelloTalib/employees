<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
   <div class="container">
      <router-view/>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
*{
  font-family: 'Poppins', sans-serif;
  border-radius: 0px !important;
  }
  body{
    background-color: #f5f3ef;
  }
</style>
