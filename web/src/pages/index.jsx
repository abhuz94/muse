import PropTypes from 'prop-types';
import React from 'react';
import _get from '../utils/_get';

import { SanityClient } from '../utils/sanityClient';
import Banner from '../components/Banner';
import Header from '../components/Header';
import NewArrival from '../components/NewArrival';

function Home({ bannerProducts, newArrivalProducts }) {
  return (
    <div className="home">
      <Header />
      <Banner products={bannerProducts} />
      <NewArrival products={newArrivalProducts} />
    </div>
  );
}

Home.propTypes = {
  bannerProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
  newArrivalProducts: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    discount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    path: PropTypes.string,
    image: PropTypes.shape({}),
    slug: PropTypes.string,
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

    const newArrivalProducts = await SanityClient.fetch(
      `*[_type == "newArrival"][0] {
        "products": [
          ...products[].product-> {
            description,
            discount,
            name,
            price,
            path,
            "image": images[0],
            "slug": slug.current,
          }
        ]
      }`,
    );

    return {
      props: {
        bannerProducts: _get(bannerProducts, 'data.tiles', []),
        newArrivalProducts: _get(newArrivalProducts, 'data.products', []),
      },
    };
  } catch (err) {
    return {
      props: {
        bannerProducts: [],
        newArrivalProducts: [],
      },
    };
  }
}

export default Home;
