import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _set from 'lodash/set';

import { INITIAL_CART_STATE } from './cartContext.constants';
import {
  INCREMENT_PRODUCT_QTY, DECREMENT_PRODUCT_QTY,
  UPDATE_CART_IN_PROGRESS, UPDATE_CART_ERROR,
  INIT_CART, EMPTY_CART,
} from './cartContext.actionTypes';

export default function cartReducer(state, action = {}) {
  switch (action.type) {
    case INCREMENT_PRODUCT_QTY: {
      const productID = _get(action, 'payload.product.id', null);
      const product = _get(action, 'payload.product');
      const newState = _cloneDeep(state);

      _set(newState, `cart.products.${productID}`, product);

      newState.cart.meta.totalPrice += product.price;
      newState.cart.meta.totalDiscount += product.discount;
      newState.cart.meta.totalQty += 1;
      newState.syncing = false;

      return newState;
    }
    case DECREMENT_PRODUCT_QTY: {
      const productID = _get(action, 'payload.product.id', null);
      const key = `cart.products.${productID}`;
      const hasProduct = _get(state, key, null) !== null;

      if (!hasProduct) { return state; }

      const newState = _cloneDeep(state);
      const product = _get(newState, key);
      product.qty -= 1;
      newState.cart.meta.totalQty -= 1;
      newState.cart.meta.totalPrice -= product.price;
      newState.cart.meta.totalDiscount -= product.discount;
      newState.syncing = false;

      return product.qty === 0 ? _omit(newState, key) : newState;
    }
    case UPDATE_CART_IN_PROGRESS:
      return { ...state, syncing: true };
    case UPDATE_CART_ERROR:
      return { ...state, syncing: false, error: action.payload };
    case INIT_CART: {
      const products = action.payload;

      if (products === null) { return { ...state, syncing: false }; }

      const newState = _cloneDeep(state);
      newState.cart.products = products;
      newState.syncing = false;

      Object.values(products).forEach((product) => {
        newState.cart.meta.totalQty += product.qty;
        newState.cart.meta.totalPrice += product.price;
        newState.cart.meta.totalDiscount += product.discount;
      });

      return newState;
    }
    case EMPTY_CART:
      return INITIAL_CART_STATE;
    default:
      return state;
  }
}
