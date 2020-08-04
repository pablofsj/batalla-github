import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'; 
import axios from 'axios';
    


Vue.config.productionTip = false

Vue.prototype.axios = axios



Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    puntaje1: 0,
    puntaje2: 0
    
  },

  mutations: {
    puntaje1: function(state,nuevo_puntaje1) {
      this.state.puntaje1=nuevo_puntaje1;
    },

    puntaje2: function(state,nuevo_puntaje2) {
      this.state.puntaje2=nuevo_puntaje2;
    }

  }
})





new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
