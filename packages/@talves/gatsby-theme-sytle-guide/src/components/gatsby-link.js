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

const GatsbyLink = ({ children, ...props }) => (
  <Box as={Link} {...props} sx={ButtonStyle}>
    {children}
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
