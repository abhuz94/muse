import PropTypes from 'prop-types';
import React from 'react';

import CartProvider from '../contexts/cartContext';
import UserProvider from '../contexts/userContext';

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </CartProvider>
    </UserProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.PropTypes.shape({}).isRequired,
};

export default App;
