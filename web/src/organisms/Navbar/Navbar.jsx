import React from 'react';

import { useUser } from '../../contexts/userContext';
import HomeIcon from './Icons/Home';
import OrderIcon from './Icons/Order';
import ShoppingCartIcon from './Icons/ShoppingCart';
import UserIcon from './Icons/User';
import WishlistIcon from './Icons/Wishlist';

function Navbar() {
  const { user } = useUser();

  return (
    <div className="header">
      <div className="header-top">
        <span className=""><HomeIcon /></span>
      </div>
      <div className="navbar">
        <div className="navbar-icons-wrapper">
          <ShoppingCartIcon />
          <WishlistIcon />
          <OrderIcon />
          <UserIcon user={user} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
