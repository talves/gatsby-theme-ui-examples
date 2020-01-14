/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from './themes';
import components from './components';

export const wrapRootElement = ({ element }) =>
  jsx(
    ThemeProvider,
    {
      theme,
      components,
    },
    element,
  );
