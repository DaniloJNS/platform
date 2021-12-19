<template>
  <header class="border-b boder-color-black bg-white">
    <nav class="w-3/4 mx-auto">
      <router-link to="/">Home</router-link> |
      <router-link to="/Conferences">Ver Todas</router-link>
    </nav>
  </header>
</template>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
