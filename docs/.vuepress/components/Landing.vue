<template>
<div class="home">
  <div class="hero">

    <!-- Profile Image -->
    <img
      v-if="data.heroImage"
      :src="$withBase(data.heroImage)"
      alt="hero"
    >

    <!-- Title & Description -->
    <h1>{{ data.heroText || $title || 'Hello' }}</h1>

    <p class="description">
      {{ data.tagline || $description || 'Welcome to your VuePress site' }}
    </p>

    <!-- Social Links -->
    <div>
      {{ data.socials }}
    </div>
    
  </div>

  <!-- all markdown content after the YAML frontmatter will go in here -->
  <Content custom/>

  <!-- Footer -->
  <div
    class="footer"
    v-if="data.footer"
  >
    {{ data.footer }}
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
.hero {
  border-bottom: 1px solid #eaecef;
}

img {
  border-radius: 150px;
}
</style>
