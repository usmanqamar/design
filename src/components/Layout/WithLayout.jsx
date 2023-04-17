import React from 'react';

const WithLayout = ({ children, header, footer }) => {
  return (
    <>
      {children} {footer}
    </>
  );
};

export default WithLayout;
