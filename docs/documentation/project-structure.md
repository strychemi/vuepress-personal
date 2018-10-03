# Project Structure

## Project Directory

The only directory of concern is `/docs/`:

```
docs
├── .vuepress
│   ├── components
│   │   ├── Gallery.vue
│   │   ├── ...
│   ├── config.js
│   ├── enhanceApp.js
│   ├── palette.styl
│   ├── public
│   │   └── img
│   │       ├── cute_doggo_0.jpeg
│   │       ├── ...
│   └── style.styl
├── README.md
├── documentation
│   ├── configuration.md
│   ├── ...
└── projects
    └── README.md
```

## `/docs/.vuepress`

All customization and configuration lives within this directory. Let's break this down a bit more:

```bash
.vuepress 
├── components          # All custom Vue Components/Layouts live here           
│   ├── Gallery.vue
│   ├── ...
├── config.js           # The heart of configuring the VuePress site is here
├── enhanceApp.js       # Optional: app-level enhancements (additional Vue plugins)
├── palette.styl        # Optional: change Vuepress's default theme colors here
├── public              # Static assets go here. The build process will copy
│   └── img             # everything in public to root of generated directory.
│       ├── ...
└── style.styl          # Optional: override or add styles here
```

VuePress registers all `*.vue` files in `.vuepress/components` globally.

What this means is that you can use these components in directly in markdown files (component names come from their filenames):

```md
# Header 1

<Gallery />
```

## `/docs/`

Everything else within this directory provide the content and structure for the site as markdown files:

```bash
docs
├── .vuepress
│   ├── ...
├── README.md                 # The Landing Page (Home Page)
├── documentation             # The Documentation Page
│   ├── configuration.md        
│   ├── deploying.md
│   ├── documentation.md
│   ├── getting-started.md
│   ├── home.md
│   ├── introduction.md       # Documentation - Introduction Page
│   ├── project-structure.md  # Documentation - Project Structure Page
│   ├── projects.md           # ...
│   └── styling.md          
└── projects                  # The Projects Page
    └── README.md
```

100% of the content for this page is written completely in markdown `project-structure.md`
and what you see is the VuePress generated result.

The rest of the `documentation` directory follow this pattern.

The home page and projects page are both markdown files, but they also contain YAML frontmatter and Vue syntax due to their custom visual and non-doc-like nature.

Feel free to experiment and change files/directories to your needs, however keep in mind that each  sub-directory should contain a README.md file. VuePress will convert this to `index.html`.

This rule can be circumvented by playing around with the config file, `.vuepress/config.js`, which is what was done for the `documentation` dir.

