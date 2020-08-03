<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col m12 s12">
          <h2>Welcome to GitHub Battle</h2>
          <h3>Player One</h3>
          <img src="https://imageog.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="">
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

img{
  width: 200px;
}

h2{
  font-family: 'Righteous', cursive;
}

</style>
