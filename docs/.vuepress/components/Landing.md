# Landing

## Documentation for the Landing Vue Component.

This component serves the landing page's style and content. This component is a modified version of Vuepress's default Home.vue component.

## How this component is structured

Data supplied to the component is specified via YAML frontmatter in `README.md` in the `docs/` dir.

Relative links to profile images, social button links, and footer content should be specified within the the YAML frontmatter.

Vuepress takes this frontmatter data and makes it available to this component as `this.$page.frontmatter`.

Any content/markdown that comes after the frontmatter in `README.md` will go to `<Content custom/>`, as seen in this component's template.

You can take advantage of this structure to easily customize the landing page.