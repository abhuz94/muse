import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import CartProvider from '../contexts/cartContext';
import Layout from '../templates/Layout';
import UserProvider from '../contexts/userContext';

import '../styles/global.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <UserProvider>
        <CartProvider>
          <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </UserProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.PropTypes.shape({}).isRequired,
};

export default App;
