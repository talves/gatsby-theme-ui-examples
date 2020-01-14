import React from 'react';
import { ThemeProvider, Box } from 'theme-ui';
import Header from './header';
import Typography from './typography';
import Colors from './colors';
import StyledComponents from './styled-components';
import { default as defaultTheme } from '../themes';
import { GatsbyLinkButton } from '../components/gatsby-link';

export default ({ pageContext, children }) => {
  const { theme = defaultTheme, returnPath } = pageContext || {};

  return (
    <ThemeProvider theme={() => theme}>
      <Box
        sx={{
          bg: theme.colors.background,
        }}
      >
        <GatsbyLinkButton to={`${returnPath}`}>Return</GatsbyLinkButton>
        <Header />
        {children}
        <Colors />
        <Typography />
        <StyledComponents />
      </Box>
    </ThemeProvider>
  );
};
