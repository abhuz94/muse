import PropTypes from 'prop-types';
import React from 'react';
import _get from '../../../utils/_get';

import { SanityClient } from '../../../utils/sanityClient';
import ProductDetailsComponent from '../../../components/ProductDetails';
import ProductReviews from '../../../components/ProductReviews';

function ProductDetails({ product }) {
  return (
    <>
      <ProductDetailsComponent product={product} />
      <div className="mt-8">
        <ProductReviews productID={product.id} />
      </div>
    </>
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
    const res = await SanityClient.fetch(`
      *[_type=="category"] {
        "slugs": products[][0]->{
          "params": {
            "productSlug": slug.current,
            "categorySlug": ^.slug.current,
          }
        }
      }.slugs
    `);

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
    const { categorySlug, productSlug } = _get(context, 'params', {});

    const res = await SanityClient.fetch(
      `*[_type=="category"
        && slug.current=="${categorySlug}"
        && (products[]->slug.current)[@=="${productSlug}"][0] != null][0] {
          "product": products[][0]->{
            "id": _id,
            name,
            description,
            "images": images[]{asset},
            price,
            discount,
          }
      }`,
    );
    const product = _get(res, 'data.product');

    if (!product) { throw new Error('product not found'); }

    return {
      props: { product },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default ProductDetails;
