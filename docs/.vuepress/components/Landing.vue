<template>
<div class="home">
  <div class="hero">

    <!-- Profile Image -->
    <img
      class="profile-img"
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
    <div class="socials">
      <div v-for="item in data.socials">
        <a :href="item.src" target="_blank">
          <font-awesome-icon 
            :icon="['fab', item.target]" 
            size="3x"
          />
        </a>
      </div>
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
  name: "Landing",
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  .hero
    border-bottom: 1px solid #eaecef
    img
      max-height: 200px

.profile-img 
  border-radius: 150px

.socials
  display: flex
  flex-direction: row
  justify-content: center
  div
    padding: 1em
</style>
