import PropTypes from 'prop-types';
import React from 'react';

import Navbar from '../../organisms/Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-20 md:ml-[96px]">
        <main className="my-4 mx-auto md:max-w-7xl">{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
