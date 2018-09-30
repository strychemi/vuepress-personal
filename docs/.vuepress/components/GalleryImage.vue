<template>
<div class="gallery-image">
  <img
      class=""
      :src="$withBase('/sunrise.jpg')"
      alt="hero"
    >
</div>
</template>

<script>
export default {
  name: "GalleryImage"
}
</script>

<style lang="stylus" scoped>
.gallery-image
  flex: 1 1 300px
  img
    width: 100%
    height: 100%
</style>
