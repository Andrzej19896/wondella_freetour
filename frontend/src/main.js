import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Configurar la URL base para las peticiones HTTP
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

Vue.prototype.$http = axios; // Para acceder a Axios en los componentes con this.$http

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');