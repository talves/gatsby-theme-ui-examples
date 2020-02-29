module.exports = {
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: `@talves/gatsby-theme-site-provider`,
      options: { wrapRootElement: true },
    },
    {
      resolve: `@talves/gatsby-theme-test`,
      options: { wrapRootElement: false },
    },
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
