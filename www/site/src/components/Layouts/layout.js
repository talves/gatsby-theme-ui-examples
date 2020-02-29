import React from 'react';
import { Global } from '@emotion/core';
import { Box, useThemeUI } from '../../provider';
import { FlexLayout, Header, Main, Container } from './wrappers';
import ThemeSwitcher from '../ThemeSwitcher';

export const Layout = ({ children, header = 'Header' }) => {
  const { theme } = useThemeUI();

  return (
    <FlexLayout variant="styles.root">
      <Global
        styles={{
          html: {
            boxSizing: 'border-box',
          },
          '*, *::before, *::after': {
            boxSizing: 'inherit',
            margin: 0,
            padding: 0,
          },
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Header
        sx={{
          padding: [2, 3, 4],
        }}
        variant="styles.Nav"
      >
        <Box as="h2" sx={{ ml: 10, color: theme.colors.navtext }}>
          {header}
        </Box>
        <Box sx={{ position: 'absolute', right: '10px' }}>
          <ThemeSwitcher displayMode={false} />
        </Box>
      </Header>
      <Main variant="styles.Layout">
        <Container>{children}</Container>
      </Main>
    </FlexLayout>
  );
};
