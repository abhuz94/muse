import { AiOutlineShoppingCart } from 'react-icons/ai';
import React, { useEffect } from 'react';
import _get from '../../../utils/_get';

import { fetchCartAction } from '../../../contexts/cartContext/cartContext.asyncActions';
import { useUser } from '../../../contexts/userContext';
import { useCart } from '../../../contexts/cartContext';

function Cart() {
  const { user } = useUser();
  const { state: { cart }, dispatch } = useCart();
  const fetchCart = fetchCartAction(dispatch);

  useEffect(() => {
    if (user) { fetchCart(user.id); }
  }, [user]);

  return (
    <div>
      <AiOutlineShoppingCart />
      <span>{_get(cart, 'meta.productCount')}</span>
    </div>
  );
}

export default Cart;
