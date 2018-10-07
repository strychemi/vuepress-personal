<template>
<div 
  class="gallery-image" 
  @mouseover="showCaption = true" 
  @mouseout="showCaption = false" 
>
  <!-- Project Image -->
  <img
    :src="$withBase(img)"
    :alt="title"
  >

  <!-- Caption with project details appear on mouse hover -->
  <div class="caption" v-if="showCaption">
    <div class="caption-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <!-- https://developers.google.com/web/tools/lighthouse/audits/noopener -->
      <a 
        v-if="codeLink"
        :href="codeLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        [Code]
      </a>
      <a 
        v-if="demoLink"
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
      default() { return '/img/cute_doggo_1.jpeg'; }
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallery-image
  flex: 1 1 300px
  position: relative
  overflow: hidden
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
