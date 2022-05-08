import SanityClient from '../../utils/sanityClient';

// eslint-disable-next-line import/prefer-default-export
export const updateCartAction = (dispatch) => (action) => {
  SanityClient.updateCart({});

  dispatch(action);
};
