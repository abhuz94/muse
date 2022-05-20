import Link from 'next/link';
import React from 'react';
import _map from 'lodash/map';

import Button from '../../atoms/Button';
import ImageViewer from '../../organisms/ImageViewer';
import ProductReviews from '../../organisms/ProductReviews';
import ProductSuggestions from '../../organisms/ProductSuggestions';
import productReader from '../../readers/product.reader';
import sanityClient from '../../utils/sanityClient';
import _get from '../../utils/_get';

function ProductDetail({ product }) {
  const images = _get(product, 'images');

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="grow">
          <ImageViewer imageURLs={_map(images, (image) => sanityClient.urlFor(image))} />
        </div>
        <div className="w-full md:w-6/12">
          <div className="product-details">
            <div>
              <h2 className="text-4xl">{productReader.name(product)}</h2>
              <div className="mt-8">
                <p className="font-bold">Details</p>
                <p>{productReader.description(product)}</p>
              </div>
              <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${productReader.path(product)}`}>
                <a href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${productReader.path(product)}`}>
                  <Button className="mt-8">Buy Now</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductSuggestions />
      </div>
      <div>
        <ProductReviews productID={product.id} />
      </div>
    </div>
  );
}

export default ProductDetail;
