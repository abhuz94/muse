import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import _get from '../../utils/_get';

import CounterButton from '../CounterButton';
import productReader from '../../readers/product.reader';
import sanityClient from '../../utils/sanityClient';

import { incrementCartAction, decrementCartAction } from '../../contexts/cartContext/cartContext.asyncActions';
import { useCart } from '../../contexts/cartContext';
import { useUser } from '../../contexts/userContext';

function ProductCard({ product }) {
  const { user } = useUser();
  const { state, dispatch } = useCart();
  const src = sanityClient.urlFor(productReader.image(product));
  const qty = _get(state, `cart.products.${productReader.id(product)}.qty`, 0);
  const incrementCart = incrementCartAction(dispatch);
  const decrementCart = decrementCartAction(dispatch);

  return (
    <div className="product-card">
      <h2>{productReader.name(product)}</h2>
      <Image src={src} width="300" height="300" alt={productReader.name(product)} />
      <p>{productReader.description(product)}</p>
      <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${productReader.path(product)}`}>
        <button type="button">Buy Now</button>
      </Link>
      <CounterButton
        min={0}
        max={10}
        value={qty}
        onIncrement={() => incrementCart({ id: user.id, product: { ...product, qty: qty + 1 } })}
        onDecrement={() => decrementCart({ id: user.id, product: { ...product, qty: qty - 1 } })}
      />
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
