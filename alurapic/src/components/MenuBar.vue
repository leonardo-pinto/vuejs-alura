<template>
  <nav>
    <ul>
      <li 
        v-for="route of routes"
        :key="route.title"
      >
        <router-link :to="route.path ? route.path : '/'">
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from '../routes';
export default {
 data() {
    return {
      routes: routes.filter((route) => route.menu),
    }
  }
}
</script>

<style>

</style>