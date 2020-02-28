import React from 'react';
import { Link } from 'gatsby';
import { Box } from '../provider';
import { Button } from './button';

const ButtonStyle = {
  '&.active': {
    color: 'muted',
  },
  fontFamily: 'body',
  fontWeight: [200, 300, 400],
  fontSize: [2, 3, 4],
  textDecoration: 'none',
  padding: '0.5rem',
  mt: '0.5rem',
  mb: '0.5rem',
  color: 'background',
  bg: 'text',
  borderRadius: [2, 3, 4],
  '&:hover': {
    color: 'text',
    bg: 'background',
    borderStyle: 'solid',
    borderWidth: '2px',
  },
};

const BaseLinkStyle = {
  fontFamily: 'body',
  fontWeight: [200, 300, 400],
  fontSize: [2, 3, 4],
  textDecoration: 'none',
  padding: 0,
  color: 'text',
  '&:hover': {
    color: 'secondary',
    cursor: 'pointer',
    '&::before': {
      width: '100%',
      height: '2px',
    },
  },
};

const LinkStyle = {
  ...BaseLinkStyle,
  display: 'inline-block',
  '&:hover': {
    color: 'text',
    cursor: 'pointer',
    '&::before': {
      width: '100%',
      height: '2px',
    },
  },

  position: 'relative',
  '&:before': {
    backgroundColor: 'secondary',
    content: '""',
    height: '1px',
    position: 'absolute',
    bottom: '-1px',
    transition: 'width 0.3s ease-in-out',
    width: '20%',
  },
};

export const GatsbyLink = ({ children, sx = {}, ...props }) => (
  <Box as={Link} {...props} sx={{ ...BaseLinkStyle, ...sx }}>
    {children}
  </Box>
);

export const GatsbyPageLink = ({ children, sx = {}, ...props }) => (
  <Box as={Link} {...props} sx={{ ...LinkStyle, ...sx }}>
    {children}
  </Box>
);

export const GatsbyLinkButton = ({ sx = {}, ...props }) => {
  return (
    <Button
      as={Link}
      sx={{ display: 'inline-block', ...sx }}
      {...props}
    ></Button>
  );
};

export const OutsideLink = ({ children, sx = {}, to, ...props }) => (
  <Box
    as={'a'}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
    sx={{ ...LinkStyle, ...sx }}
  >
    {children}
  </Box>
);
