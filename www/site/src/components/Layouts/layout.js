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
        <Container>
          <Box
            sx={{
              fontFamily: 'body',
              '& p': { margin: '5px 0 5px 10px', display: 'block' },
              '& pre': {
                background: '#f4f4f4',
                border: '1px solid #ddd',
                borderLeft: '3px solid #f36d33',
                color: '#666',
                pageBreakInside: 'avoid',
                fontFamily: 'Menlo,monospace',
                fontSize: '15px',
                lineHeight: '1em',
                marginBottom: '1.6em',
                marginLeft: '30px',
                maxWidth: '100%',
                overflow: 'auto',
                overflowX: 'auto',
                padding: '0.5em 1em',
                display: 'block',
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                counterReset: 'line',
              },
              '& pre > code': {
                position: 'relative',
              },
            }}
          >
            {children}
          </Box>
        </Container>
      </Main>
    </FlexLayout>
  );
};
