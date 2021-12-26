<template>
  <img
    class="response-picture"
    :src="url"
    :alt="title"
  >
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
       required: true,
    }
  }
}
</script>

<style scoped>
  .response-picture {
      width: 100%;
    }
</style>