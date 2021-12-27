import Home from './components/HomeComponent.vue';
import Register from './components/RegisterComponent.vue';

export const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    title: 'Home',
    menu: true,
  },
  {
    path: '/register/:id',
    name: 'edit',
    component: Register,
    title: 'Register',
    menu: false,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    title: 'Register',
    menu: true,
  },
  {
    path: '*',
    component: Home,
    menu: false,
  }
];
