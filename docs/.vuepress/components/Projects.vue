<template>
<!-- Simple container for projects page contents -->
<div class="home">
  <!-- All markdown content after YAML frontmatter will go here -->
  <Content custom/>
  
  <!-- Footer with the 'Last Updated' text -->
  <div class="footer">
    <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Projects',
  computed: {
    lastUpdated () {
      if (this.$page.lastUpdated) {
        return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)
      }
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  padding: 0rem 2.5rem 2rem 2.5rem
</style>
