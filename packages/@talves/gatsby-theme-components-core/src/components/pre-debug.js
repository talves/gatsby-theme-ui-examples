import React from 'react';
import { useThemeUI, Box } from '../provider';

export const PreDebug = props => {
  const context = useThemeUI();
  return <Box as="pre">{JSON.stringify(context, null, 2)}</Box>;
};
