import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import sanityClient from '../../utils/sanityClient';
import productReader from '../../readers/product.reader';

const Images = ({ images, alt }) => _map(images, (image) => {
  const src = sanityClient.urlFor(image);

  return <Image key={src} src={src} width="300" height="300" alt={alt} />;
});

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <div className="product-card flex gap-5">
        <div className=" bg-stone-900 shadow-2xl p-8 relative">
          <Images images={productReader.images(product)} alt={productReader.name(product)} />
        </div>
        <div>
          <h2 className="text-4xl">{productReader.name(product)}</h2>
          <div className="mt-8">
            <p className="font-bold">Details</p>
            <p>{productReader.description(product)}</p>
          </div>
          <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${productReader.path(product)}`}>
            <button type="button" className="mt-8">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({})),
    price: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
};

export default ProductDetails;
