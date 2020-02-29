import React from 'react';
import { useColorMode, Box, useThemeUI } from '../../provider';
import ToggleSwitch from '../ToggleSwitch';

const ThemeSwitcher = ({ displayMode = true }) => {
  const checkBoxRef = React.useRef();
  const context = useThemeUI();
  const { theme = {} } = context;
  const [colorMode, setColorMode] = useColorMode();

  React.useEffect(() => {
    if (checkBoxRef.current) {
      checkBoxRef.current.checked = colorMode === 'dark';
    }
  }, [colorMode]);

  return (
    <Box
      sx={{
        padding: 20,
        fontSize: ['0.6rem', '0.75rem', '1rem'],
        // color: (theme.colors && theme.colors.text) || 'white',
        '& button': {
          borderRadius: 5,
          fontSize: ['0.6rem', '0.75rem', '1rem'],
          // color: (theme.colors && theme.colors.text) || 'white',
          padding: 10,
          margin: '1rem',
          backgroundColor: (theme.colors && theme.colors.muted) || 'white',
        },
      }}
    >
      <Box>
        <ToggleSwitch
          ref={checkBoxRef}
          defaultChecked={colorMode === 'dark'}
          onClick={event => {
            if (checkBoxRef.current) {
              setColorMode(checkBoxRef.current.checked ? 'dark' : 'default');
            }
          }}
        />{' '}
        {displayMode && (
          <Box as="span" variant="styles.Layout">
            {colorMode}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ThemeSwitcher;
