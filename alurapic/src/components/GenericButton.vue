<template>
  <button 
    :class="setButtonStyle"
    :type="type"
    @click="dispatchAction"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    confirmation: {
      type: Boolean,
      required: false,
      default: false,
    },
    btnStyle: {
      type: String,
      required: false,
      default: "regular",
    }
  },

  emits: ['activate-button'],
  
  computed: {
    setButtonStyle() {
      let buttonStyle;
      if (this.btnStyle === "danger") {
        buttonStyle = "button button-danger";
      }
      if (this.btnStyle === "regular") {
        buttonStyle = "button button-regular";
      }
      return buttonStyle;
    }
  },


  methods: {
    dispatchAction() {
      if (this.confirmation) {
        if(confirm('Remove this picture?')) {
          this.$emit('activate-button');
        }
        return;
      }
      this.$emit('activate-button');
    }
  },


}
</script>

<style>
  .button {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .button-danger {
    background: firebrick;
    color: white;
  }

  .button-regular {
    background: darkcyan;
    color: white;
  }
</style>