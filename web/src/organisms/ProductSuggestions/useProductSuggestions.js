import { useEffect, useState } from 'react';
import _get from 'lodash/get';

import { SanityClient } from '../../utils/sanityClient';

const INITIAL_STATE = Object.freeze({
  products: [],
  error: null,
  syncing: false,
});

const fetchNewProducts = async () => SanityClient.fetch(`
  *[_type == "newArrival"][0] {
    "products": products[] {
      product->{
        "id": _id,
        name,
        "rating": coalesce(avgRating, 0),
        "image": images[0],
        path,
        price,
        discount
      }
    }.product
  }
`);

export default function useNewProducts() {
  const [newProducts, setNewProducts] = useState(INITIAL_STATE);

  useEffect(() => {
    setNewProducts({ ...newProducts, syncing: true });
    fetchNewProducts()
      .then((res) => setNewProducts({ ...newProducts, products: _get(res, 'data.products', []), syncing: false }))
      .catch((err) => setNewProducts({
        ...newProducts, products: [], syncing: false, error: err,
      }));
  }, []);

  return newProducts;
}
