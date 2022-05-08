import React from 'react';

import Cart from './Cart';
import Logo from './Logo';

import { useUser } from '../../contexts/userContext';

function Header() {
  const { user } = useUser();

  console.log(user);

  return (
    <div className="header">
      <Logo />
      <Cart />
      {user?.name}
    </div>
  );
}

export default Header;
