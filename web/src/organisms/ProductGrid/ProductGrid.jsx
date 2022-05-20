import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import _map from 'lodash/map';

import { PRODUCT_GRID_CLASSES } from './ProductGrid.constants';
import ProductGridTile from '../../molecules/ProductGridTile';

function ProductGrid({ products, className }) {
  return (
    <div className={cx('product-grid grid gap-2 sm:grid-cols-none md:grid-rows-6 md:grid-cols-5', className)}>
      {
        _map(
          products,
          (product, i) => (
            <ProductGridTile
              key={product.id}
              product={product}
              className={PRODUCT_GRID_CLASSES[i]}
            />
          ),
        )
      }
    </div>
  );
}

ProductGrid.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
};

ProductGrid.defaultProps = {
  className: '',
};

export default ProductGrid;
