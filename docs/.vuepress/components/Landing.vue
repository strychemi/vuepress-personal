<template>
  <div class="home">
    <div class="hero">

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      
      <div>{{ this.$page }}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
