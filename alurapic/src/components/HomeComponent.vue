<template>
  <div class="main-container">
    <h1 class="main-title">
      {{ title }}
    </h1>
    <input
      type="search"
      class="filter"
      @input="filter = $event.target.value"
    >
    <ul class="pictures-list">
      <li
        v-for="picture of filteredPictures"
        :key="picture.url"
        class="pictures-list-item"
      >
        <picture-container :picture-title="picture.titulo">
          <responsive-picture 
            :url="picture.url"
            :title="picture.titulo"
          />
          <generic-button 
            label="Remove"
            type="button"
            :confirmation="false"
            btn-style="regular"
            @activate-button="remove(picture)"
          />
        </picture-container>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import PictureContainer from './PictureContainer.vue';
import ResponsivePicture from './ResponsivePicture.vue';
import GenericButon from './GenericButton.vue';

export default {
  components: {
    pictureContainer: PictureContainer,
    responsivePicture: ResponsivePicture,
    genericButton: GenericButon,
  },

  data() {
    return {
      title: "Alurapic",
      pictures: [],
      filter: '',
    };
  },

  computed: {
    filteredPictures() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.pictures.filter((picture) => exp.test(picture.titulo));
      }
      return this.pictures;
    }
  },

  created() {
    axios.get('http://localhost:3000/v1/fotos')
      .then(res => this.pictures = res.data);
  },

  methods: {
    remove(picture) {
      alert(picture.titulo + 'picture has been removed succesfully!')
    }
  },


};
</script>
<style>
  .main-title {
      text-align: center;
    }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pictures-list {
    list-style: none;
  }

  .pictures-list .pictures-list-item {
    display: inline-block;
  }

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
</style>
