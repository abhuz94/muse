import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import ProductCard from '../ProductCard';

function NewArrival({ products }) {
  return (
    <div className="new-arrival text-white">
      <h2 className="text-4xl text-center">New Arrivals</h2>
      <div className="products mt-8 flex flex-col align-center justify-center gap-5 md:flex-row">
        {_map(products, (product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </div>
  );
}

NewArrival.propTypes = {
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

export default NewArrival;
