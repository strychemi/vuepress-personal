---
layout: Projects
indoor:
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_1.jpeg
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_1.jpeg
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_1.jpeg
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_1.jpeg
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_1.jpeg
outdoor:
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_2.jpeg
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_2.jpeg
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_2.jpeg
- title: Project Title
  description: Culpa eiusmod deserunt veniam commodo reprehenderit.
  img: /img/cute_doggo_2.jpeg
---

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
