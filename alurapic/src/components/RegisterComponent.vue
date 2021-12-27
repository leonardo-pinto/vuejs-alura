<template>
  <div>
    <h1 class="center">
      Register
    </h1>
    <h2 class="center" />

    <form @submit.prevent="register()">
      <div class="control">
        <label for="title">TITLE</label>
        <input
          id="title"
          v-model="picture.titulo"
          v-validate
          name="title"
          data-vv-rules="required|min:3"
          autocomplete="off"
        >
        <span v-show="errors.has('title')">{{ errors.first('title') }}</span>
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input
          id="url"
          v-model="picture.url"
          v-validate
          name="url"
          data-vv-rules="required|min:3"
          autocomplete="off"
        >
        <span v-show="errors.has('url')">{{ errors.first('url') }}</span>
        <responsive-picture
          v-show="picture.url"
          :title="picture.titulo"
          :url="picture.url"
        />
      </div>

      <div class="control">
        <label for="description">DESCRIPTION</label>
        <textarea
          id="description"
          v-model="picture.descricao"
          autocomplete="off"
        />
      </div>

      <div class="center">
        <generic-button
          label="SAVE"
          type="submit"
          btn-style="regular"
        />
        <router-link :to="{name: 'home'}">
          <generic-button
            label="CANCEL"
            type="button"
            btn-style="danger"
          />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>

import ResponsivePicture from './ResponsivePicture.vue';
import GenericButon from './GenericButton.vue';
import Picture from '../domains/Picture';
import axios from 'axios';

export default {

  components: {
    'responsive-picture': ResponsivePicture, 
    'generic-button': GenericButon,
  },

  data() {
    return {
      picture: new Picture(),
      id: this.$route.params.id,
    }
  },

  created() {
    if (this.id) {
      axios.get(`http://localhost:3000/v1/fotos/${this.id}`)
        .then((res) => this.picture = res.data);
    }
  },

  methods: {
    register() {
      this.$validator
        .validateAll()
        .then(success => {
          if(success) {
            if (this.id) {
              axios.put(`http://localhost:3000/v1/fotos/${this.id}`, this.picture)
                .then(() => this.$router.push({ name: 'home' }))
            } else {
              axios.post('http://localhost:3000/v1/fotos', this.picture)
                .then(() => this.picture = new Picture())
                .catch((err) => console.log(err.message));
            }
          }
        })
    }
  },

}

</script>
<style scoped>

  .center {
    text-align: center;
  }
  .control {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .control label {
    display: block;
    font-weight: bold;
  }

 .control label + input, .control textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

</style>