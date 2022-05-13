import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

import { TILE_CLASSES } from './Banner.constants';
import Tile from './Tile';

function Banner({ products }) {
  return (
    <div className="banner relative grid gap-2 md:grid-rows-6 md:grid-cols-5 sm:grid-cols-none">
      {
        _map(
          products,
          (product, i) => <Tile product={product} key={product.id} className={TILE_CLASSES[i]} />,
        )
      }
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
