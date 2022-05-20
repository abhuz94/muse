import { RiShoppingCartLine } from 'react-icons/ri';
import React from 'react';

import Badge from '../../../../atoms/Badge';
import NavbarIcon from '../../../../atoms/NavbarIcon';
import withLink from '../../../../hocs/withLink';

function ShoppingCart() {
  return (
    <NavbarIcon className="h-12 w-12">
      <RiShoppingCartLine size={18} />
      <Badge className="navbar-icon-badge" />
    </NavbarIcon>
  );
}

export default withLink(ShoppingCart, '/my-cart');
