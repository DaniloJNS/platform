<template>
  <header class="border-b boder-color-black bg-white">
    <nav class="w-3/4 mx-auto text-xl font-bold">
      <ul class="none flex space-x-4 justify">
        <li class="none hover:bg-green-50 p-4"><router-link to="/">Home</router-link></li>
        <li class="none hover:bg-green-50 p-4"><router-link
            to="/Conferences">Ver Todas as palestras</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  padding: 0px 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
