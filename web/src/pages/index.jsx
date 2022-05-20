import PropTypes from 'prop-types';
import React from 'react';
import _get from '../utils/_get';

import { SanityClient } from '../utils/sanityClient';
import Home from '../templates/Home';

function HomePage({ bannerProducts }) {
  return (
    <div className="home-page">
      <Home products={bannerProducts} />
    </div>
  );
}

HomePage.propTypes = {
  bannerProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
};

export async function getServerSideProps() {
  try {
    const bannerProducts = await SanityClient.fetch(
      `*[_type == "banner"][0] {
        tiles[] | order(seq) {
          "id": _key,
          title,
          image,
          ctaText,
          path,
        }
      }`,
    );

    return { props: { bannerProducts: _get(bannerProducts, 'data.tiles', []) } };
  } catch (err) {
    return { props: { bannerProducts: [] } };
  }
}

export default HomePage;
