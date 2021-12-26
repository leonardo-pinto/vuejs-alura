import Home from './components/HomeComponent.vue';
import Register from './components/RegisterComponent.vue';

export const routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: '/register',
    component: Register,
    title: 'Register',
  }
];
