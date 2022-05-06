import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import bannerProductReader from '../../../readers/bannerProduct.reader';
import sanityClient from '../../../utils/sanityClient';

function Tile({ product }) {
  const src = sanityClient.urlFor(bannerProductReader.image(product));

  return (
    <div className="tile">
      <h2>{bannerProductReader.title(product)}</h2>
      <Image src={src} width="300" height="300" alt={bannerProductReader.title(product)} />
      <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${bannerProductReader.path(product)}`}>
        <button type="button">{bannerProductReader.ctaText(product)}</button>
      </Link>
    </div>
  );
}

Tile.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

export default Tile;
