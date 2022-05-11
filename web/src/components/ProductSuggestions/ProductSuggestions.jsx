import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import ProductCard from '../ProductCard';

function ProductSuggestion({ products }) {
  return (
    <div className="new-arrival text-white">
      <h2 className="text-6xl">New Arrivals</h2>
      <div className="products mt-8 flex gap-5">
        {_map(products, (product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </div>
  );
}

ProductSuggestion.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    discount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    path: PropTypes.string,
    image: PropTypes.shape({}),
    slug: PropTypes.string,
  })).isRequired,
};

export default ProductSuggestion;
