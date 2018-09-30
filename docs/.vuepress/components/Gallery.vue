<template>
<div class="home">
  <!-- all markdown content after the YAML frontmatter will go in here -->
  <Content custom/>

  <div class="gallery">
    <GalleryImage 
      v-for="project in data.projects"
      :key="project.id"
    />
  </div>

  <p>{{ data }}</p>
  
</div>

</template>

<script>
import GalleryImage from './GalleryImage.vue';

export default {
  name: 'Gallery',
  components: {
    GalleryImage
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallery
  display: flex
  flex-direction: row
  flex-wrap: wrap
</style>
