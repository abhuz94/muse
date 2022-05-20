import { RiArrowRightLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Image from '../../atoms/Image';
import Link from '../../atoms/Link';
import gridProductReader from '../../readers/gridProduct.reader';
import sanityClient from '../../utils/sanityClient';

function ProductGridTile({ product, className }) {
  const imgSrc = sanityClient.urlFor(gridProductReader.image(product));

  return (
    <div className={cx('product-grid-tile relative w-full h-full min-h-[50vmin] md:min-h-[8rem]', className)}>
      <Link
        className="text-slate-50 hover:no-underline group"
        href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${gridProductReader.path(product)}`}
      >
        <a
          href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${gridProductReader.path(product)}`}
          className="product-info absolute w-full h-full flex flex-col p-4 bg-gray-800 bg-opacity-40 z-10"
        >
          <h3 className="grow text-lg">{gridProductReader.title(product)}</h3>
          <div className="ml-auto hidden group-hover:inline-block">
            <RiArrowRightLine size={32} />
          </div>
        </a>
      </Link>
      <Image src={imgSrc} objectFit="cover" />
    </div>
  );
}

ProductGridTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape({}),
    ctaText: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

ProductGridTile.defaultProps = {
  className: '',
};

export default ProductGridTile;
