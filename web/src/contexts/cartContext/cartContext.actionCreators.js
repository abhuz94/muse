import { INCREMENT_PRODUCT_QTY, DECREMENT_PRODUCT_QTY, EMPTY_CART } from './cartContext.actionTypes';

export const createIncrementProductQtyAction = (payload) => ({
  type: INCREMENT_PRODUCT_QTY,
  payload,
});

export const createDecrementProductQtyAction = (payload) => ({
  type: DECREMENT_PRODUCT_QTY,
  payload,
});

export const createEmptyCartAction = () => ({
  type: EMPTY_CART,
});
