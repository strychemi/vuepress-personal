# vuepress-personal

A VuePress template for personal websites.

### [Live Demo](https://vuepress-personal.netlify.com/)

### [Full Docs](https://vuepress-personal.netlify.com/documentation/introduction.html)

# Getting Started

## Prerequisites

Make sure you have the following already installed on your system:
- [Node.js](https://nodejs.org/en/) >= 8.0.0
- [Yarn](https://yarnpkg.com/en/)

## Installation

```bash
# Clone the repository
git clone https://github.com/strychemi/vuepress-personal.git
cd vuepress-personal

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

You can configure where you want to static files to be built via the `dest` field in `.vuepress/config`. Check out [VuePress Config Reference](https://v0.vuepress.vuejs.org/config/) for more info.

# NOTE

This template uses the pre-alpha (recommended & production stable) version of VuePress (0.14.4). , so the many of the links in the docs will refer to the v0 version of the docs. 

Will revisit this once VuePress gets more stable after it goes beta.

If you use googled VuePress to get to their docs, you may actually land on the alpha version (1.x) of their docs. As of writing this, they now have a nice green popup that lets you know this.