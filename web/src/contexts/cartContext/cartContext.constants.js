// eslint-disable-next-line import/prefer-default-export
export const INITIAL_CART_STATE = Object.freeze({
  products: [],
  error: null,
  isFetching: false,
  meta: {
    totalPrice: 0,
    totalDiscount: 0,
    productCount: 0,
  },
});
