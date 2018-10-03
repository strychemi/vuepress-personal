# Deploying

To generate the static files for the webpage, run:

```shell
yarn docs:build
```

This will generate the files in the `.vuepress/dist` directory by default.

The template is deployed to Netlify, but there are many options for deployment.

Please refer to [VuePress Deploying docs](https://vuepress.vuejs.org/guide/deploy.html#github-pages) for more info.


## Netlify

Follow the Netlify setup instructions to create a new site from Github.

- Set the build command to: `yarn docs:build`
- Publish directory: `docs/.vuepress/dist`

Hit the deploy button.