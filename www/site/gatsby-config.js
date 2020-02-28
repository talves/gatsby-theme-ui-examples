module.exports = {
  plugins: [
    'gatsby-plugin-mdx',
    '@talves/gatsby-theme-site-provider',
    {
      resolve: '@talves/gatsby-theme-a',
      options: {
        name: 'gatsby-theme-a',
        basePath: '/a',
        returnPath: '/',
      },
    },
    {
      resolve: '@talves/gatsby-theme-b',
      options: {
        name: 'gatsby-theme-b',
        basePath: '/b',
        returnPath: '/',
      },
    },
  ],
};
