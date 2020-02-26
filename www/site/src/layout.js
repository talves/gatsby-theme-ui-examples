/** @jsx jsx */
import React from 'react';
import { jsx, Styled } from 'theme-ui';
import { Global } from '@emotion/core';

export default props => (
  <React.Fragment>
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
          padding: 10,
        },
      }}
    />
    <Styled.root>
      <header>
        <h2>Theme UI Gatsby Example</h2>
      </header>
      <main>
        <div sx={{ fontFamily: 'body' }}>{props.children}</div>
      </main>
    </Styled.root>
  </React.Fragment>
);
