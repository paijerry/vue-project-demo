<template>
  <div id="app">
    <div class="header">每頁都長一樣的寫在 src/App.vue, router-view 在這裡載入 <a href="/#/">home</a><a href="/#/page1">page1</a></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  margin: 0;
  padding: 0;
  background: #ccc;
  height: 50px;
  line-height: 50px;
}

.header > a {
  display:inline-block;
  margin: 0 10px;
  padding: 0 10px;
  background: #408abb;
  text-decoration: none;
}
</style>
