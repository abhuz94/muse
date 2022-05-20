import { RiArrowRightLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';

import BrandInfo from '../../atoms/BrandInfo';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import RatingBadge from '../../atoms/RatingBadge';
import QuickInfoBadge from '../../atoms/QuickInfoBadge';
import gridProductReader from '../../readers/gridProduct.reader';
import sanityClient from '../../utils/sanityClient';
import _get from '../../utils/_get';
import PropertyControlledComponent from '../../atoms/PropertyControlledComponent';

function ProductCard({ product }) {
  const imgSrc = sanityClient.urlFor(gridProductReader.image(product));
  const rating = gridProductReader.rating(product);

  return (
    <div className="relative w-64 hover:shadow-2xl transition-300 cursor-pointer flex flex-col h-full">
      <div className="w-full h-64"><Image src={imgSrc} objectFit="contain" /></div>
      <div className="p-4 text-base flex-grow">
        <h3>{gridProductReader.name(product)}</h3>
        <BrandInfo name={_get(product, 'brand.name', '')} isVerified={_get(product, 'brand.isVerified', false)} />

        <PropertyControlledComponent shouldRender={rating > 0}>
          <div className="flex gap-1 mt-4">
            <RatingBadge rating={gridProductReader.rating(product)} />
          </div>
        </PropertyControlledComponent>
        <p className="mt-4 text-sm">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
        </p>
      </div>
      <div className="cta-wrapper mt-4">
        <Button label="Buy Now" className="w-full">
          <RiArrowRightLine />
        </Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    brand: PropTypes.shape({
      name: PropTypes.string,
      isVerified: PropTypes.bool,
    }),
    price: PropTypes.number,
    ratings: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
