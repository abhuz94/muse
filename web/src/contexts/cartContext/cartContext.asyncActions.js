import {
  createFetchCartInProgressAction, createFetchCartErrorAction,
  createIncrementProductQtyAction, createDecrementProductQtyAction,
  createUpdateCartInProgressAction, createUpdateCartErrorAction,
  createInitCartAction, createEmptyCartAction,
} from './cartContext.actionCreators';
import { fetchCart, updateCart, deleteCart } from '../../utils/cart';
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
    await updateCart(payload);
    dispatch(createIncrementProductQtyAction(payload));
  } catch (error) {
    dispatch(createUpdateCartErrorAction());
  }
};

export const decrementCartAction = (dispatch) => async (payload) => {
  dispatch(createUpdateCartInProgressAction());

  try {
    if (_get(payload, 'product.qty') === 0) {
      await deleteCart(payload);
    } else {
      await updateCart(payload);
    }
    dispatch(createDecrementProductQtyAction(payload));
  } catch (error) {
    dispatch(createUpdateCartErrorAction());
  }
};

export const deleteCartAction = (dispatch) => async (payload) => {
  dispatch(createUpdateCartInProgressAction());

  try {
    await deleteCart(payload);
    dispatch(createEmptyCartAction());
  } catch (error) {
    dispatch(createUpdateCartErrorAction());
  }
};
