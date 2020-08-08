<template>
  <div class="home-component">

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img alt="Vue logo" src="../assets/logo.png" width="100px">
          <h3 class="display-5 "><span style="color:#b10c0c">Costume Shop - Where you are your imagination</span></h3>
          <p class="lead">Become whoever you want.</p>
        </div>
    </div>
    <router-link to="/products" tag="button" class="btn buttonGreen-outline">See Our Products</router-link>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.jumbotron {
  padding: 1rem 0rem;
}
</style>
