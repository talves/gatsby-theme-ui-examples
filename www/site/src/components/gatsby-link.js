import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'theme-ui';

const ButtonStyle = {
  '&.active': {
    color: 'muted',
  },
  lineHeight: [3, 4, 5],
  fontFamily: 'body',
  fontWeight: [200, 300, 400],
  fontSize: [2, 3, 4],
  textDecoration: 'none',
  padding: '14px',
  color: 'muted',
  bg: 'text',
  borderRadius: '8px',
  '&:hover': {
    color: 'text',
    bg: 'muted',
    borderStyle: 'solid',
    borderWidth: '2px',
  },
};

const LinkStyle = {
  padding: 0,
  '& a': {
    textDecoration: 'none',
    color: 'body',
    display: 'inline-block',
    position: 'relative',
    '&:before': {
      bg: 'red',
      content: '""',
      height: '2px',
      position: 'absolute',
      bottom: -1,
      transition: 'width 0.3s ease-in-out',
      width: '0',
    },
    '&:hover': {
      color: 'black',
      '&::before': {
        width: '100%',
      },
    },
  },
};

export const GatsbyLink = ({ children, ...props }) => (
  <Box as={Link} {...props} sx={ButtonStyle}>
    {children}
  </Box>
);

export const OutsideLink = ({ children, to, ...props }) => (
  <Box as={'span'} sx={LinkStyle}>
    <Box
      as={'a'}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Box>
  </Box>
);

export const GatsbyLinkButton = props => {
  return (
    <Box sx={{ cursor: 'pointer' }}>
      <GatsbyLink as={Link} {...props}></GatsbyLink>
    </Box>
  );
};

export default GatsbyLink;
