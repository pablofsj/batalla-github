<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col m12 s12">
          <h2>Welcome to GitHub Battle</h2>
        </div>
      </div>
      <div class="row">
        <InfoGithub :num_jugador='1'/>
        <InfoGithub :num_jugador='2'/>
      </div>
      <br>
      <div class="row">
        <div class="col m12 s12">
          <button @click='comparaPuntajes()' class="btn waves-effect black btn-large" type="submit" name="action">Battle!</button>
        </div>
      </div>
      <br> 
    </div> 
  </div>
</template>

<script>
import InfoGithub from './components/InfoGithub.vue'

export default {
  name: 'App',
  components: {
    InfoGithub
  },

  methods: {
    comparaPuntajes(){
      if(this.$store.state.puntaje1 > this.$store.state.puntaje2 ){
        alert(`The first player has won with a score of ${this.$store.state.puntaje1} `)
      }
      else if(this.$store.state.puntaje1 < this.$store.state.puntaje2){
        alert(`The second player has won with a score of ${this.$store.state.puntaje2} `)
      }
      else {
        alert('The players have tied')
      }
   } 
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
