import Wrapper from './src/wrap-root-element';
import { onRenderBody } from './src/on-render-body';

export { onRenderBody };

export const wrapRootElement = (props, options) => {
  const noRootElement = options && !Boolean(options.wrapRootElement);
  if (noRootElement) return;
  console.log(`Setting up SSR shared context Wrapper`);
  /* We use a shared context for all theme plugins. There is no reason to wrap
    every theme provider because the closest provider in the tree will be used.
  */
  return <Wrapper {...props} />;
};
