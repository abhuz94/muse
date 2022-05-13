import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import _map from 'lodash/map';
import _noop from 'lodash/noop';

import * as filterToGROQ from '../../../utils/filterToGROQ';
import { BrandFilter, PriceFilter, RatingFilter } from '../../../components/Filters';
import { SanityClient } from '../../../utils/sanityClient';
import ProductCard from '../../../components/ProductCard';
import _get from '../../../utils/_get';

function Category({ products }) {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({});
  const updateFilters = ({ key, value, name } = {}) => {
    setFilters({ ...filters, [name]: { key, value } });
  };
  const updateFilteredProducts = async (query) => {
    const { categorySlug } = _get(router, 'query', {});
    const res = await SanityClient.fetch(`*[_type=="category" && slug.current=="${categorySlug}" && (products[]->)[${query}][0] != null]{
      "products": products[]->{
        "id": _id,
        description,
        discount,
        name,
        price,
        path,
        "image": images[0],
        "slug": slug.current,
      }
    }.products`);

    // setFilteredProducts(_get(res, 'data', []));
  };

  useEffect(() => {
    const queries = [];

    Object.keys(filters).forEach((filterName) => {
      const filter = filters[filterName];
      const query = _get(filterToGROQ, filterName, _noop)(filter);

      if (query.length > 0) {
        queries.push(query);
      }
    });

    updateFilteredProducts(queries.join(' && '));
  }, [filters]);

  return (
    <div>
      <BrandFilter brands={[{ displayName: 'JBL', value: 'jbl' }]} onUpdate={updateFilters} />
      <PriceFilter min={0} max={5000} start={0} end={5000} onUpdate={updateFilters} />
      <RatingFilter onUpdate={updateFilters} />
      {_map(filteredProducts, (product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

Category.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    discount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    path: PropTypes.string,
    image: PropTypes.shape({}),
    slug: PropTypes.string,
  })).isRequired,
};

export const getStaticPaths = async () => {
  try {
    const res = await SanityClient.fetch('*[_type=="category"]{"params":{"categorySlug":slug.current}}');

    return {
      paths: _get(res, 'data', []),
      fallback: false,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticProps = async (context) => {
  try {
    const slug = _get(context, 'params.categorySlug', '');
    const res = await SanityClient.fetch(`
      *[_type=="category" && slug.current=="${slug}"][0] {
        "products": products[]->{
          "id": _id,
          description,
          discount,
          name,
          price,
          path,
          "image": images[0],
          "slug": slug.current,
        }
      }
    `);
    const products = _get(res, 'data.products');

    if (!products || !products.length) { throw new Error(`No products found for the given category ${slug}`); }

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Category;
