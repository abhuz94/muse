import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import ProductSlider from '../ProductSlider';
import useProductSuggestions from './useProductSuggestions';

function ProductSuggestions({ className }) {
  const { products } = useProductSuggestions();

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

ProductSuggestions.propTypes = {
  className: PropTypes.string,
};

ProductSuggestions.defaultProps = {
  className: '',
};

export default ProductSuggestions;
