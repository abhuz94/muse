import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import productReader from '../../readers/product.reader';
import sanityClient from '../../utils/sanityClient';

function ProductCard({ product }) {
  const src = sanityClient.urlFor(productReader.image(product), product);

  return (
    <div className="product-card bg-black p-4 shadow-2xl text-white flex flex-col items-center justify-center">
      <h2 className="font-bold mb-4 text-2xl">{productReader.name(product)}</h2>
      <Image src={src} width="300" height="300" alt={productReader.name(product)} />
      <p>{productReader.description(product)}</p>
      <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}/category${productReader.path(product)}`}>
        <Button text="Buy Now" className="mt-8" />
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
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
