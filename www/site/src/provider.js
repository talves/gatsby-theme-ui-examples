/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { fresher as theme } from '@talves/gatsby-theme-ui-presets';
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
