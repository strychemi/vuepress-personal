<template>
<div class="home">
  <!-- all markdown content after the YAML frontmatter will go in here -->
  <Content custom/>

  <h2>Indoor</h2>
  
  <div class="gallery">
    <GalleryImage 
      v-for="project in data.indoor"
      :key="project.id"
      :title="project.title"
      :description="project.description"
      :codeLink="project.codeLink"
      :demoLink="project.demoLink"
      :img="project.img"
    />
  </div>

  <h2>Outdoor</h2>

  <div class="gallery">
    <GalleryImage 
      v-for="project in data.outdoor"
      :key="project.id"
      :title="project.title"
      :description="project.description"
      :codeLink="project.codeLink"
      :demoLink="project.demoLink"
      :img="project.img"
    />
  </div>
  
  <div class="footer"></div>

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
