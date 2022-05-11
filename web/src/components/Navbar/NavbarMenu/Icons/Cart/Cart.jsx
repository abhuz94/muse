import { RiShoppingCartLine } from 'react-icons/ri';
import React from 'react';

import Badge from '../../../../Badge';

function Cart() {
  return (
    <>
      <RiShoppingCartLine size="28" />
      <Badge className="navbar-icon-badge" />
    </>
  );
}

export default Cart;
