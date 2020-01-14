const theme = require('@theme-ui/preset-deep');

module.exports = options => {
  const {
    name = '@talves/gatsby-theme-a',
    returnPath = '/a',
    basePath = '/a',
  } = options;
  return {
    plugins: [
      {
        resolve: `@talves/gatsby-theme-style-guide`,
        options: {
          theme,
          basePath,
          returnPath,
        },
      },
    ],
  };
};
