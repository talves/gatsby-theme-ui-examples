module.exports = options => {
  const wrapRootElement = options && options.wrapRootElement;
  return {
    plugins: [
      {
        resolve: `@talves/gatsby-theme-site-provider`,
        options: {
          wrapRootElement,
        },
      },
    ],
  };
};
