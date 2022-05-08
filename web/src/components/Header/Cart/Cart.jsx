import { AiOutlineShoppingCart } from 'react-icons/ai';
import React from 'react';

import { useCart } from '../../../contexts/cartContext';

function Cart() {
  const { state } = useCart();

  return (
    <div>
      <AiOutlineShoppingCart />
      <span>{state.meta.productCount}</span>
    </div>
  );
}

export default Cart;
