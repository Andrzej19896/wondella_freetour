import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue'; // Asegúrate de que este componente existe

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  }
];

const router = new VueRouter({
  mode: 'history', // Usa 'hash' si tienes problemas con el modo history
  routes
});

export default router;
