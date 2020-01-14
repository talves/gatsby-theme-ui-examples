/* @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import { ColorPalette } from '../components/index';
console.log('Styled:', Styled);
export default () => {
  return (
    <section id="colors">
      <Styled.h2 sx={{ color: 'text' }}>Colors</Styled.h2>
      <ColorPalette sx={{ marginLeft: '40px' }} omit={[]} />
    </section>
  );
};
