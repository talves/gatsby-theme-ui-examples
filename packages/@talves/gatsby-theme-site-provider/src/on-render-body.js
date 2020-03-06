import { jsx, InitializeColorMode } from 'theme-ui';

export const onRenderBody = ({ setPreBodyComponents }, options) => {
  const noRootElement = options && !Boolean(options.wrapRootElement);
  if (noRootElement) return;

  setPreBodyComponents([
    jsx(InitializeColorMode, { key: 'theme-ui-no-flash' }),
  ]);
};
