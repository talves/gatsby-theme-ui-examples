module.exports = options => {
  const wrapRootElement = options && options.wrapRootElement;
  return {
    plugins: [
      `gatsby-plugin-mdx`,
      `@talves/gatsby-theme-site-layout`,
      {
        resolve: `@talves/gatsby-theme-site-provider`,
        options: {
          wrapRootElement,
        },
      },
      {
        resolve: `@talves/gatsby-theme-components-core`,
        options: { wrapRootElement: false },
      },
    ],
  };
};
