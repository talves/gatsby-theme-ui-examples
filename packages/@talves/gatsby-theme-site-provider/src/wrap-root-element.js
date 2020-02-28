/* @jsx jsx */
import { jsx, ThemeProvider } from './provider';
import defaultTheme from './themes';
import components from './components';

export const wrapRootElement = ({ element, theme = defaultTheme }) =>
  jsx(
    ThemeProvider,
    {
      theme,
      components,
    },
    element,
  );

export default wrapRootElement;
