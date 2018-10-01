# Getting Started

## Prerequisites

Make sure you have the following already installed on your system:
- [Node.js](https://nodejs.org/en/) >= 8.0.0
- [Yarn](https://yarnpkg.com/en/)

::: warning COMPATIBILITY NOTE
From the [official VuePress Docs](https://vuepress.vuejs.org/guide/getting-started.html):

"It is currently recommended to use Yarn instead of npm when installing VuePress into an existing project that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case."
:::

## Installation

```bash
# Clone the repository
git clone https://github.com/strychemi/vuepress-strychemi.git
cd vuepress-strychemi

# Install dependencies
yarn

# Run
yarn docs:dev
```

Check out the site on your local dev server, should look something like: `http://localhost:8080/`.

To generate static assets:

```bash
yarn docs:build
```

The default static assets will be in `.vuepress/dist` directory, which can be deployed to any static file server.

You can configure where you want to static files to be built via the `dest` field in `.vuepress/config`. Check out [VuePress Config Reference](https://vuepress.vuejs.org/config/) for more info.

