<template>
<div class="gallery">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style lang="stylus" scoped>
.gallery
  margin-top: 1em
  display: flex
  flex-direction: row
  flex-wrap: wrap
</style>
