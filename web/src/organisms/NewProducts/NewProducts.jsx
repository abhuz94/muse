import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import ProductSlider from '../ProductSlider';
import useNewProducts from './useNewProducts';

function NewProducts({ className }) {
  const { products } = useNewProducts();

  return (
    <div className={cx('new-products', className)}>
      <h3 className="underline text-center">New Products</h3>
      <div className="mt-8 flex">
        <ProductSlider
          products={products}
          slidesPerView={products.length < 3 ? products.length : null}
        />
      </div>
    </div>
  );
}

NewProducts.propTypes = {
  className: PropTypes.string,
};

NewProducts.defaultProps = {
  className: '',
};

export default NewProducts;
