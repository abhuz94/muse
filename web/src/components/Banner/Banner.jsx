import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

import Tile from './Tile';

function Banner({ products }) {
  return (
    <div className="banner">
      {_map(products, (product) => <Tile product={product} key={product.id} />)}
    </div>
  );
}

Banner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
};

export default Banner;
