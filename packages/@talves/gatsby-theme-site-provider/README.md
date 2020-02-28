
# @talves/gatsby-theme-site-provider

Gatsby theme for adding shadowable theme provider to multiple Gatsby themes for composition.

```sh
yarn add gatsby-theme-site-provider
```

In your theme, import and export the provider exports in src/provider.js.

```js
// example provider.js
export * from '@talves/gatsby-theme-site-provider'
```

Wrap our theme in an isolated provider, but make sure we pass along the consumers preference to wrapRootElement with the default provider.

```js
// gatsby-config.js
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
```

If you want to use a different theme for all the themes using `@talves/gatsby-theme-site-provider` then shadow the themes/index.js file in this plugin.

```js
// src/@talves/gatsby-theme-site-provider/themes/index.js
export { default } from '@theme-ui/preset-swiss'
```

To shadow the provider you should add this plugin to your main site, then shadow it using the path below from your own provider. This is **ONLY** needed of you have some special setup that will extend the provider for all the themes.

```js
// src/@talves/gatsby-theme-site-provider/provider.js
export * from '../../provider'
```

End-users of a theme that is built with `gatsby-theme-site-provider` can shadow the same provider.js in the theme to use the theme context of the site. Make sure to flag `wrapRootElement: false` in options for all themes then `wrapRootElement: true` for the site to use the same provider.
