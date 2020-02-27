import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'theme-ui';

const ButtonBaseStyle = {
  appearance: 'none',
  border: 0,
  borderRadius: '0.325em',
  bg: 'primary',
  color: 'navtext',
  minWidth: '6.5em',
  padding: '0.5em 1em',
  fontFamily: 'inherit',
  fontSize: ['0.8rem', '0.9rem', '1rem'],
  cursor: 'pointer',
  transition: '0.3s ease-out',
  textDecoration: 'none',
  '&:hover': {
    bg: 'secondary',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px #cccccc`,
  },
  '&:disabled': {
    color: 'background',
    bg: 'muted',
    cursor: 'not-allowed',
  },
};

export const Button = ({ children, sx = {}, as = 'button', ...props }) => (
  <Box as={as} {...props} sx={{ ...ButtonBaseStyle, ...sx }}>
    {children}
  </Box>
);

const ButtonIconStyle = {
  minWidth: 'initial',
  textAlign: 'center',
  padding: '10px 14px',
};
const SrOnlyStyle = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
  whiteSpace: 'nowrap',
};

const SvgStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  fill: 'navtext',
  width: '1.25em',
  height: '1.25em',
  marginRight: '0.25em',
};

export const IconButton = ({
  children,
  as = 'button',
  sx = {},
  altText = 'icon button',
  hiddenText = false,
  icon = 'heart',
  ...props
}) => (
  <Box
    as={as}
    {...props}
    sx={{ ...ButtonBaseStyle, ...ButtonIconStyle, ...sx }}
  >
    <Box
      as="svg"
      ariaHidden="true"
      focusable="false"
      width="24"
      height="24"
      sx={SvgStyle}
    >
      <use xlinkHref={`/button-icons.svg#${icon}`} />
    </Box>
    <Box as="span" sx={!hiddenText || SrOnlyStyle}>
      {altText}
    </Box>
  </Box>
);
