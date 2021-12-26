
<template>
  <div class="container">
    <h2 
      class="container-title"
      @dblclick="visible = !visible"
    >
      {{ pictureTitle }}
    </h2>
    <transition name="container-fade">
      <div v-show="visible">
        <slot class="container-content" />
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    pictureTitle: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      visible: true,
    }
  }
};

</script>

<style scoped>
  .container {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .container .container-title {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .container-fade-enter, .container-fade-leave-active {
    opacity: 0;
  }

  .container-fade-enter-active, .container-fade-leave-active {
    transition: opacity .4s;
  }

</style>
