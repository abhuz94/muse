import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';
import _get from '../utils/_get';

import sanityClient, { SanityClient } from '../utils/sanityClient';
import productReader from '../readers/product.reader';

const Images = ({ images, alt }) => _map(images, (image) => {
  const src = sanityClient.urlFor(image);

  return <Image key={src} src={src} width="300" height="300" alt={alt} />;
});

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <div className="product-card">
        <h2>{productReader.name(product)}</h2>
        <Images images={productReader.images(product)} alt={productReader.name(product)} />
        <p>{productReader.description(product)}</p>
        <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${productReader.path(product)}`}>
          <button type="button">Buy Now</button>
        </Link>
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

export const getStaticPaths = async () => {
  try {
    const res = await SanityClient.fetch('*[_type == "product"]{"params": {"slug": slug.current}}');

    return {
      paths: _get(res, 'data', []),
      fallback: false,
    };
  } catch (err) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  try {
    const slug = _get(context, 'params.slug', '');
    const product = await SanityClient.fetch(
      `*[_type == "product" && slug.current == "${slug}"][0] {
        "id": _id,
        name,
        description,
        "images": images[]{asset},
        price,
        discount,
      }`,
    );

    if (!product) { throw new Error('product not found'); }

    return {
      props: { product: _get(product, 'data', {}) },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default ProductDetails;
