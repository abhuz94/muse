/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import ProductReview from './ProductReview';

function Template(args) {
  return <ProductReview {...args} />;
}

export default {
  title: 'Design System/Molecules/Product Review',
  component: ProductReview,
};

export const Default = Template.bind({});
Default.args = {
  review: {
    user: {
      name: 'John',
      image: 'https://cdn.sanity.io/images/zvnwubmx/dev/ac3a435778213231ca5b911efcf899f814b7422e-1000x600.webp',
    },
    body: 'This is a review',
  },
};
