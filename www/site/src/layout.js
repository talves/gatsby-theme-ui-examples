/** @jsx jsx */
import React from 'react';
import { jsx, Styled } from './provider';
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
        <div
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
          {props.children}
        </div>
      </main>
    </Styled.root>
  </React.Fragment>
);
