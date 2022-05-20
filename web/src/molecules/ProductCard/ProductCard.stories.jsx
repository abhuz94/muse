/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import ProductCard from './ProductCard';

function Template(args) {
  return (
    <ProductCard {...args} />
  );
}

export default {
  title: 'Design System/Molecules/ProductCard',
  component: ProductCard,
};

export const Default = Template.bind({});
Default.args = {
  product: {
    name: 'Boombox',
    brand: {
      name: 'JBL',
      ratings: 2.5,
    },
    image: 'https://cdn.sanity.io/images/zvnwubmx/dev/ac3a435778213231ca5b911efcf899f814b7422e-1000x600.webp',
    price: 5440.99,
  },
};
