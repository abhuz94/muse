/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import ProductFilter from './ProductFilter';

function Template(args) {
  return (
    <div className="m-4">
      <ProductFilter {...args} />
    </div>
  );
}

export default {
  title: 'Design System/Organisms/Product Filter',
  component: ProductFilter,
};

export const Default = Template.bind({});
