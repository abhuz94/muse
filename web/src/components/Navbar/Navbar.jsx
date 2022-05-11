import React from 'react';

import NavbarMenu from './NavbarMenu';

function Navbar() {
  return (
    <div className="navbar h-full py-4 w-24 fixed top-0 left-0 bg-stone-50 text-gray-900 shadow-2xl shadow-black">
      <div className="navbar-menu-wrapper">
        <NavbarMenu />
      </div>
    </div>
  );
}

export default Navbar;
