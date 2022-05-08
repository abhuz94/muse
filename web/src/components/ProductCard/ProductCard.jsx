import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import _get from '../../utils/_get';

import CounterButton from '../CounterButton';
import productReader from '../../readers/product.reader';
import sanityClient from '../../utils/sanityClient';

import { useCart } from '../../contexts/cartContext';
import {
  createIncrementProductQtyAction, createDecrementProductQtyAction,
} from '../../contexts/cartContext/cartContext.actionCreators';
import { updateCartAction } from '../../contexts/cartContext/cartContext.asyncActions';

function ProductCard({ product }) {
  const { state, dispatch } = useCart();
  const updateCart = updateCartAction(dispatch);
  const src = sanityClient.urlFor(productReader.image(product));
  const cartProductCount = _get(
    state.products.find(
      ({ product: cartProduct }) => productReader.id(cartProduct) === productReader.id(product),
    ),
    'meta.qty',
    0,
  );
  const onIncrementHandler = () => {
    updateCart(
      createIncrementProductQtyAction({
        id: productReader.id(product), product, cartProductCount: cartProductCount + 1,
      }),
    );
  };
  const onDecrementHandler = () => {
    updateCart(
      createDecrementProductQtyAction({
        id: productReader.id(product), cartProductCount: cartProductCount - 1,
      }),
    );
  };

  return (
    <div className="product-card">
      <h2>{productReader.name(product)}</h2>
      <Image src={src} width="300" height="300" alt={productReader.name(product)} />
      <p>{productReader.description(product)}</p>
      <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${productReader.path(product)}`}>
        <button type="button">Buy Now</button>
      </Link>
      <CounterButton
        min={1}
        max={10}
        value={cartProductCount}
        onIncrement={onIncrementHandler}
        onDecrement={onDecrementHandler}
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
