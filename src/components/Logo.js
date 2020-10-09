import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.svg"
      width="50em"
      {...props}
    />
  );
};

export default Logo;
