import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';

import { INITIAL_CART_STATE } from './cartContext.constants';
import { INCREMENT_PRODUCT_QTY, DECREMENT_PRODUCT_QTY, EMPTY_CART } from './cartContext.actionTypes';

export default function cartReducer(state, action = {}) {
  switch (action.type) {
    case INCREMENT_PRODUCT_QTY: {
      const productID = _get(action, 'payload.id', null);
      const newState = _cloneDeep(state);
      let product = newState
        .products
        .find(({ product: savedProduct }) => savedProduct.id === productID);

      if (product) {
        product.meta.qty += 1;
      } else {
        product = _get(action, 'payload.product');

        newState.products.push({ product, meta: { qty: 1 } });
      }

      newState.meta.totalPrice += product.price;
      newState.meta.totalDiscount += product.discount;
      newState.meta.productCount += 1;

      return newState;
    }
    case DECREMENT_PRODUCT_QTY: {
      const productID = _get(action, 'payload.id', null);
      const productIndex = state
        .products
        .findIndex(({ product }) => product.id === productID);

      if (productIndex === -1) { return state; }

      const newState = _cloneDeep(state);
      const product = newState.products[productIndex];

      product.meta.qty -= 1;

      if (product.meta.qty === 0) {
        newState.products.splice(productIndex, 1);
      }

      newState.meta.productCount -= 1;
      newState.meta.totalPrice -= product.price;
      newState.meta.totalDiscount -= product.discount;

      return newState;
    }
    case EMPTY_CART:
      return INITIAL_CART_STATE;
    default:
      return state;
  }
}
