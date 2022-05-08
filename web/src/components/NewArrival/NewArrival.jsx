import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import ProductCard from '../ProductCard';

function NewArrival({ products }) {
  return (
    <div className="new-arrival">
      {_map(products, (product) => <ProductCard product={product} key={product.id} />)}
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
