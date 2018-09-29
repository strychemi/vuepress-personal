module.exports = {
  title: 'Cute Doggo',
  description: 'im good boi',
  // Customizing the default theme
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/frontend' },
      { text: 'Documentation', link: '/documentation/introduction' }
    ],
    sidebar: {
      '/projects/': [{
        title: 'Projects',
        collapsable: false,
        children: [
          // '',
          'frontend',
          'backend',
          'data-viz',
          'ruby-on-rails'
        ]
      }],
      '/documentation/': [{
        title: 'Documentation',
        collapsable: false,
        children: [
          // '',
          'introduction',
          'getting-started',
          'map-of-project',
          'cutomize'
        ]
      }]
    },
    // Below two properties sets the Github link in the navbar
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'strychemi/vuepress-strychemi',
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub',

    // displays the UNIX timestamp(ms) of each file's last git commit at bottom of each page in an appropriate format
    // NOTE: only works if this is  git repo and there is at least 1 commit
    lastUpdated: 'Last Updated', // string | boolean

    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },

    // disable the default search bar in nav menu
    search: false
  }
};