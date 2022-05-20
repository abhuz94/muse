import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import _map from 'lodash/map';

import { SanityClient } from '../../../utils/sanityClient';
import ProductCard from '../../../molecules/ProductCard';
import ProductFilter from '../../../organisms/ProductFilter';
import _get from '../../../utils/_get';

function Category({ products }) {
  const [test, setTest] = useState([]);

  useEffect(() => {
    const filterProducts = async (filters) => {
      const query = `*[_type=="category" && slug.current=="speakers"][0] {
        "product": (@.products[]->)[${Object.values(filters).filter((q) => q).join(' && ')}]
      }.product`;

      console.log(query);

      try {
        const res = await SanityClient.fetch(query);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    filterProducts(test);
  }, [test]);

  return (
    <div>
      <ProductFilter onUpdate={setTest} />
      <div className="mt-8 flex flex-col items-center md:flex-row md:flex-wrap md:gap-5">
        {_map(products, (product) => <ProductCard product={product} />)}
      </div>
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
