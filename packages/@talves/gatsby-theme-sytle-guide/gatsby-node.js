exports.createPages = ({ actions }, opts = {}) => {
  const { basePath = '/style-guide', returnPath = '/', theme } = opts;

  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/style-guide.js'),
    context: { theme, returnPath },
  });
};
