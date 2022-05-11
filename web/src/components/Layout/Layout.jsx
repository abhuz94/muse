import PropTypes from 'prop-types';
import React from 'react';

import Navbar from '../Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="my-4 ml-28 mr-4">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
