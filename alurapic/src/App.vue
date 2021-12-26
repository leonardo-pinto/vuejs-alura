
<template>
  <div class="body">
    <menu-bar />
    <router-view />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  components: {
    'menu-bar': MenuBar,
  }

};
</script>

<style>
  .body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
</style>
