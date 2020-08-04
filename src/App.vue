<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col m12 s12">
          <h2>Welcome to GitHub Battle</h2>
          <h4>Player One</h4>
        </div>
      </div>
      <InfoGithub/>
    </div> 
  </div>
</template>

<script>
import InfoGithub from './components/InfoGithub.vue'

export default {
  name: 'App',
  components: {
    InfoGithub
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

h2{
  font-family: 'Righteous', cursive;
}

</style>
