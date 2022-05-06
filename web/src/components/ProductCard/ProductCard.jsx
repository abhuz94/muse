import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import productReader from '../../readers/product.reader';
import sanityClient from '../../utils/sanityClient';

function ProductCard({ product }) {
  const src = sanityClient.urlFor(productReader.image(product));
  return (
    <div className="product-card">
      <h2>{productReader.name(product)}</h2>
      <Image src={src} width="300" height="300" alt={productReader.name(product)} />
      <p>{productReader.description(product)}</p>
      <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${productReader.path(product)}`}>
        <button type="button">Buy Now</button>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    discount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    path: PropTypes.string,
    image: PropTypes.shape({}),
    slug: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
