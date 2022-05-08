import {
  FETCH_CART_IN_PROGRESS, FETCH_CART_SUCCESS, FETCH_CART_ERROR,
  UPDATE_CART_IN_PROGRESS, UPDATE_CART_ERROR,
  INCREMENT_PRODUCT_QTY, DECREMENT_PRODUCT_QTY,
  INIT_CART, EMPTY_CART,
} from './cartContext.actionTypes';

export const createFetchCartInProgressAction = () => ({
  type: FETCH_CART_IN_PROGRESS,
});

export const createFetchCartSuccessAction = (payload) => ({
  type: FETCH_CART_SUCCESS,
  payload,
});

export const createFetchCartErrorAction = (payload) => ({
  type: FETCH_CART_ERROR,
  payload,
});

export const createUpdateCartInProgressAction = () => ({
  type: UPDATE_CART_IN_PROGRESS,
});

export const createUpdateCartErrorAction = () => ({
  type: UPDATE_CART_ERROR,
});

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

export const createInitCartAction = (payload) => ({
  type: INIT_CART,
  payload,
});
