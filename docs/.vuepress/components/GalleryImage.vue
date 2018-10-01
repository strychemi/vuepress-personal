<template>
<div 
  class="gallery-image" 
  @mouseover="showCaption = true" 
  @mouseout="showCaption = false" 
>
  <img
      class=""
      :src="$withBase(img)"
      :alt="title"
  >
  <div class="caption" v-if="showCaption">
    <div class="caption-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <!-- https://developers.google.com/web/tools/lighthouse/audits/noopener -->
      <a 
        :href="codeLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        [Code]
      </a>
      |
      <a 
        :href="demoLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        [Live Demo]
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "GalleryImage",
  data() {
    return {
      showCaption: false
    }
  },
  methods: {
    displayCaption() {
      
    }
  },
  props: {
    title: {
      type: String,
      default() { return 'Title'; }
    },
    description: {
      type: String,
      default() { return 'Description'; }
    },
    codeLink: {
      type: String,
      default() { return '#'; }
    },
    demoLink: {
      type: String,
      default() { return '#'; }
    },
    img: {
      type: String,
      default() { return ''; }
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallery-image
  flex: 1 1 300px
  position: relative
  img
    width: 100%
    height: 100%
  .caption
    color: white
    background-color: black
    opacity: 0.81
    display: block
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    .caption-content
      margin: 1em
</style>
