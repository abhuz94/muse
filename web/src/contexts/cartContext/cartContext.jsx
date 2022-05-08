import PropTypes from 'prop-types';
import React, {
  createContext, useContext, useMemo, useReducer,
} from 'react';

import { INITIAL_CART_STATE } from './cartContext.constants';
import cartReducer from './cartContext.reducer';

const cartContext = createContext();

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(cartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
