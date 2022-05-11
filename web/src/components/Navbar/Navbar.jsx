import React from 'react';

import NavbarMenu from './NavbarMenu';

function Navbar() {
  return (
    <div className="navbar h-full py-4 w-24 fixed top-0 left-0 bg-gray-900 text-white shadow-2xl shadow-pink-500">
      <div className="navbar-menu-wrapper">
        <NavbarMenu />
      </div>
    </div>
  );
}

export default Navbar;
