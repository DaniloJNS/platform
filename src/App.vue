<template>
  <div class="w-full text-gray-100" id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: {
      Header
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
