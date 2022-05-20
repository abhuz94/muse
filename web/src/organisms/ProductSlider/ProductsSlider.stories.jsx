/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import ProductSlider from './ProductSlider';

const products = Array(9).fill(-1).map(() => ({
  id: Math.random().toString(),
  name: 'Boombox',
  brand: {
    name: 'JBL',
    isVerified: true,
  },
  ratings: parseFloat((Math.random() * 5).toFixed(2)) + 1,
  image: 'https://cdn.sanity.io/images/zvnwubmx/dev/ac3a435778213231ca5b911efcf899f814b7422e-1000x600.webp',
  price: 5440.99,
}));

function Template(args) {
  return <ProductSlider {...args} />;
}

export default {
  title: 'Design System/Atoms/Product Slider',
  component: ProductSlider,
};

export const Default = Template.bind({});
Default.args = { products };
