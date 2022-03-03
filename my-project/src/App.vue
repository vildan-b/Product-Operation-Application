<template>
  <div id="app">
    <img src="./assets/logo.png">
    <kosullarListeler/>
  </div>
</template>

<script>
import kosullarListeler from './components/kosullarListeler'

export default {
  name: 'App',
  components: {
    kosullarListeler
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
