import PropTypes from 'prop-types';
import React from 'react';

import NewProducts from '../../organisms/NewProducts';
import ProductGrid from '../../organisms/ProductGrid';

function Home({ products }) {
  return (
    <div>
      <ProductGrid products={products} />
      <NewProducts className="mt-8" />
    </div>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
};

export default Home;
