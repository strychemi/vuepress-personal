# Projects

## The Project Page Basics

Looking at the frontmatter from `docs/projects/README.md`:

```yaml
---
layout: Projects
indoor:
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_1.jpeg
- ...
outdoor:
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_2.jpeg
- ...
---
```

We specify `layout: Projects`, which mean we use `.vuepress/components/Projects.vue` component as our base page layout.

`Projects.vue` was created to act as a container for the page's content with more agreeable page margins.

Let's take a look at the template of `Projects.vue`:

```vue{6}
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
```

## Tabulating and Handling Page-Specific Data

`<Content custom/>` highlighted above will take the rest of the of `docs/projects/README.md`:

```md
# Projects
Check out my work here! :dog:

## Indoor

<Gallery>
  <GalleryImage 
    v-for="project in $page.frontmatter.indoor"
    :key="project.id"
    :title="project.title"
    :description="project.description"
    :img="project.img"
  />
</Gallery>

## Outdoor

<Gallery>
  <GalleryImage 
    v-for="project in $page.frontmatter.outdoor" 
    :key="project.id"
    :title="project.title"
    :description="project.description"
    :img="project.img"
  />
</Gallery>

```

Here, we are leveraging VuePress's ability to compile Vue syntax in markdown, as we are using the globally registered components (from the `.vuepress/components` dir) inside this markdown file.

And having the YAML front matter available as data via `$page.frontmatter` allows components to easily consume the data where it lives, as shown above.

## Approach to Handling Data

Based on the docs, front matter is for handling the page's metadata, so it may not be suitable for all use cases (e.g. viability of tabulating a list of 10^6 items).

However, for my use case I found it to be the path of least resistance and easiest to maintain. Please feel free to let me know if there's a better way of doing this.

There are other approaches for different use cases:

1. [Content Excerpt](https://vuepress.vuejs.org/guide/custom-themes.html#content-excerpt): "If a markdown file contains a <!-- more --> comment, any content above the comment will be extracted and exposed as `$page.excerpt`. If you are building custom theme for blogging, this data can be used to render a post list with excerpts." 

::: warning
The downside to this approach is that the markdown is parsed and converted to html string in `$page.excerpt`, which adds more abstraction on top of the data. Works for the stated use case, but otherwise it may get in the way if you go this route for a non-intended scenario.
:::

2. Tabulate your data in a JSON file and import it in a Vue component.

```vue
<template>
<div>
  <div v-for="project in projects">
    <h1>{{ project.title }}></h1>
    <p>{{ project.description }}</p>
  </div>
</div>
</template>


<script>
import projects from './projects.json'
export default {
  data () {
    return {
      projcts: projects.projects
    }
  }
}
</script>
```
::: tip
I think this approach is also a viable alternative to front matter approach. However, this leans away from the markdown-centric architecture VuePress provides, thus seems more like an anti-pattern from a VuePress perspective.

The front matter approach is probably more preferrable since the data is tabulated and is consumed on within the same file with VuePress's `$page.frontmatter` paradigm.

This is more of a personal preferrence, so feel free try this out.
:::

3. Use Axios to fetch API data for your component to render:
Not my use case (for now), but if you were wondering how to to incorporate API data into your VuePress site, then you can utilize the `beforeMount` lifecycle hook and axios async to fetch data from an API:

```vue
<template>
  <div v-for="project in projects">
    <h1>{{ project.title }}></h1>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data () {
    return {
      projects: []
    }
  },
  async beforeMount() {
    this.$data.projects = await axios.get('https://some-api.com/projects')
  }
}
</script>

```

## Project Gallery

### Gallery Layout & Responsiveness

If you take a look at the `Gallery.vue`:

```vue
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
```

It's a simple container that houses the multitude of `GalleryImage.vue` components. This is a cut-and-dry textbook example of a basic flex container.

Let's take a look at the `GalleryImage.vue` component next:

```vue{16}
<template>
<div 
  class="gallery-image" 
  @mouseover="showCaption = true" 
  @mouseout="showCaption = false" 
>
  ...
</template>

<script>
...
</script>

<style lang="stylus" scoped>
.gallery-image
  flex: 1 1 300px
  position: relative
  overflow: hidden
  img
    width: 100%
    height: 100%
  ...
</style>

```

The trick here is the highlighted line above: `flex: 1 1 300px`, which is equivalent to having `flex-grow` and `flex-shrink` each set to `1`, with `flex-basis` as `300px`. This means each `GalleryImage` component will grow and shrink at the same rate (to fill the available space) as each other with an initial main size of `300px`.

### Gallery Image Caption

Looking at a different parts of the same `GalleryImage.vue` component:

```vue{4,5,14,27}
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
      ...
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
  ...
}
</script>
```

Here we are utilizing Vue's basic capabilities. `@mouseover` and `@mouseout` detects the mouse hover and mouse exit events on each `GalleryImage` component, and evaluates their respective expressions by setting each component's `showCaption` data to `true` or `false`.

The caption will appear based on the if `showCaption` is true or not via `v-if="showCaption"`. 