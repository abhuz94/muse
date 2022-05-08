// eslint-disable-next-line import/prefer-default-export
export const INITIAL_CART_STATE = Object.freeze({
  cart: {
    products: {},
    meta: {
      totalPrice: 0,
      totalDiscount: 0,
      totalQty: 0,
    },
  },
  error: null,
  syncing: false,
});
