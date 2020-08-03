import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'; 
import axios from 'axios';
    


Vue.config.productionTip = false

Vue.prototype.axios = axios


Vue.use(Vuex)

new Vue({
  render: h => h(App),
}).$mount('#app')
