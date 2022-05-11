import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import cs from 'classnames';

import bannerProductReader from '../../../readers/bannerProduct.reader';
import sanityClient from '../../../utils/sanityClient';

function Tile({ product, className }) {
  const src = sanityClient.urlFor(bannerProductReader.image(product));

  return (
    <div
      className={cs('tile text-white relative min-h-4', className)}
    >
      <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${bannerProductReader.path(product)}`}>
        <div className="cursor-pointer">
          <div className="desc absolute w-full h-full p-4 bg-black bg-opacity-40 text-white top-0 left-0 z-10">
            <h2 className="text-2xl font-bold">{bannerProductReader.title(product)}</h2>
            <button type="button">{bannerProductReader.ctaText(product)}</button>
          </div>
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            alt={bannerProductReader.title(product)}
          />
        </div>
      </Link>
    </div>
  );
}

Tile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

Tile.defaultProps = {
  className: '',
};

export default Tile;
