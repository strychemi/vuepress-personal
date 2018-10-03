module.exports = {
  title: 'Cute Doggo',
  description: 'im good boi',
  // Customizing the default theme
  themeConfig: {
    // configure the navbar items
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Documentation', link: '/documentation/introduction' }
    ],
    // configure the sidebars for the site
    sidebar: {
      // we only want sidebars for the documentation page
      // notice how the children correspond to each markdown file in the dir
      '/documentation/': [{
        title: 'Documentation',
        collapsable: false,
        children: [
          'introduction',       /* /documentation/introduction.html */
          'getting-started',    /* /documentation/getting-started.html */
          'project-structure',  /* /documentation/project-structure.html */
          'configuration',      /* /documentation/configuration.html */
          'home',               /* /documentation/home.html */
          'projects',           /* /documentation/projects.html */
          'documentation',      /* /documentation/documentation.html */
          'styling',            /* /documentation/styling.html */
          'deploying'           /* /documentation/deploying.html */
        ]
      }]
    },
    // Below two properties sets the Github link in the navbar
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'strychemi/vuepress-personal',
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub',

    // displays the UNIX timestamp(ms) of each file's last git commit at bottom 
    // of each page in an appropriate format
    // NOTE: only works if this is  git repo and there is at least 1 commit
    lastUpdated: 'Last Updated', // string | boolean

    serviceWorker: {
      // If set to true, the default text config will be: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
      updatePopup: true // Boolean | Object, default to undefined.
    },

    // disable the default search bar in nav menu
    search: false
  },

  markdown: {
    // disable automatic header anchor links being generated for headers
    anchor: { permalink: false }
  }
};