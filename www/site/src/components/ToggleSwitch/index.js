import React from 'react';
import { Box, useThemeUI } from '../../provider';

const ToggleSwitch = React.forwardRef(({ checked, ...props }, ref) => {
  const { theme } = useThemeUI();
  const onColor =
    props.onColor ||
    (theme && theme.colors && theme.colors.secondary) ||
    '#2196F3';
  const offColor =
    props.offColor || (theme && theme.colors && theme.colors.primary) || '#CCC';
  const switchColor =
    props.switchColor ||
    (theme && theme.colors && theme.colors.muted) ||
    '#CCC';

  return (
    <Box
      as="label"
      sx={{
        //class="switch"
        position: 'relative',
        display: 'inline-block',
        width: '40px',
        height: '24px',
        '& input': {
          opacity: 0,
          width: 0,
          height: 0,
        },
        '& span': {
          //class="slider round"
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: offColor,
          WebkitTransition: '.4s',
          transition: '.4s',
          borderRadius: '24px',
        },
        '& span:before': {
          position: 'absolute',
          content: '""',
          height: '20px',
          width: '20px',
          left: '2px',
          bottom: '2px',
          backgroundColor: switchColor,
          WebkitTransition: '.4s',
          transition: '.4s',
          borderRadius: '50%',
        },
        '& input:checked + span': {
          backgroundColor: offColor,
        },
        '& input:focus + span': {
          boxShadow: `0 0 1px ${onColor}`,
        },
        '& input:checked + span:before': {
          WebkitTransform: 'translateX(16px)',
          msTransform: 'translateX(16px)',
          transform: 'translateX(16px)',
        },
      }}
    >
      <input ref={ref} type="checkbox" {...props} />
      <Box as="span"></Box>
    </Box>
  );
});

export default ToggleSwitch;
