import {
  createFetchCartInProgressAction, createFetchCartErrorAction,
  createIncrementProductQtyAction, createDecrementProductQtyAction,
  createUpdateCartInProgressAction, createUpdateCartErrorAction,
  createInitCartAction, createClearCartAction,
} from './cartContext.actionCreators';
import { fetchCart, upsertProduct, removeProduct } from '../../utils/cart';
import _get from '../../utils/_get';

export const fetchCartAction = (dispatch) => async (userID) => {
  dispatch(createFetchCartInProgressAction());

  try {
    const res = await fetchCart(userID);
    dispatch(createInitCartAction(res.data));
  } catch (error) {
    dispatch(createFetchCartErrorAction(error));
  }
};

export const incrementCartAction = (dispatch) => async (payload) => {
  dispatch(createUpdateCartInProgressAction());

  try {
    await upsertProduct(payload);
    dispatch(createIncrementProductQtyAction(payload));
  } catch (error) {
    dispatch(createUpdateCartErrorAction());
  }
};

export const decrementCartAction = (dispatch) => async (payload) => {
  dispatch(createUpdateCartInProgressAction());

  try {
    if (_get(payload, 'product.qty') === 0) {
      await removeProduct(payload);
    } else {
      await upsertProduct(payload);
    }
    dispatch(createDecrementProductQtyAction(payload));
  } catch (error) {
    dispatch(createUpdateCartErrorAction());
  }
};

export const clearCartAction = (dispatch) => async (payload) => {
  dispatch(createUpdateCartInProgressAction());

  try {
    await removeProduct(payload);
    dispatch(createClearCartAction());
  } catch (error) {
    dispatch(createUpdateCartErrorAction());
  }
};
