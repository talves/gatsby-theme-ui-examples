import React from 'react';
import { useThemeUI, Box } from 'theme-ui';

export const PreTheme = props => {
  const context = useThemeUI();
  return (
    <Box as="pre" sx={{ color: 'text' }}>
      {JSON.stringify(context, null, 2)}
    </Box>
  );
};
