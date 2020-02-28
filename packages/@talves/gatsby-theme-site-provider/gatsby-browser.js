import React from 'react';
import Wrapper from './src/wrap-root-element';

export const wrapRootElement = (props, options) => {
  const noRootElement = options && !Boolean(options.wrapRootElement);
  console.log('Core:options', options, 'noRootElement', noRootElement);
  if (noRootElement) return;
  console.log(`Setting up browser shared context Wrapper`);
  /* We use a shared context for all theme plugins. There is no reason to wrap
    every theme provider because the closest provider in the tree will be used.
  */
  return <Wrapper {...props} />;
};
