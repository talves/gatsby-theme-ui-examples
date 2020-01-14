/* @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui';
import React from 'react';

export default () => {
  return (
    <Box as="header">
      <Styled.h1
        sx={{
          color: 'green',
        }}
      >
        Style Guide
      </Styled.h1>
    </Box>
  );
};
