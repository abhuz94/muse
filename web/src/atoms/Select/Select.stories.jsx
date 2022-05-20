/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import Select from './Select';

function Template(args) {
  const [selected, setSelected] = useState([]);

  return (
    <div className="w-72">
      <Select
        selected={selected}
        onChange={setSelected}
        {...args}
      />
    </div>
  );
}

export default {
  title: 'Design System/Atoms/Select',
  Component: Select,
  parameters: {
    layout: 'centered',
  },
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Price - Low to High', value: 'price-lh', isDisabled: true },
    { label: 'Price - High to Low', value: 'price-hl' },
    { label: 'Ratings - Low to High', value: 'rating-lh' },
    { label: 'Ratings - High to Low', value: 'rating-hl' },
  ],
};

export const Clearable = Template.bind({});
Clearable.args = {
  isClearable: true,
  options: [
    { label: 'Price - Low to High', value: 'price-lh' },
    { label: 'Price - High to Low', value: 'price-hl' },
    { label: 'Ratings - Low to High', value: 'rating-lh' },
    { label: 'Ratings - High to Low', value: 'rating-hl' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  options: [
    { label: 'Price - Low to High', value: 'price-lh' },
    { label: 'Price - High to Low', value: 'price-hl' },
    { label: 'Ratings - Low to High', value: 'rating-lh' },
    { label: 'Ratings - High to Low', value: 'rating-hl' },
  ],
};

export const Multi = Template.bind({});
Multi.args = {
  isMulti: true,
  options: [
    { label: 'Price - Low to High', value: 'price-lh' },
    { label: 'Price - High to Low', value: 'price-hl' },
    { label: 'Ratings - Low to High', value: 'rating-lh' },
    { label: 'Ratings - High to Low', value: 'rating-hl' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  options: [
    { label: 'Price - Low to High', value: 'price-lh' },
    { label: 'Price - High to Low', value: 'price-hl' },
    { label: 'Ratings - Low to High', value: 'rating-lh' },
    { label: 'Ratings - High to Low', value: 'rating-hl' },
  ],
};

export const Searchable = Template.bind({});
Searchable.args = {
  isSearchable: true,
  options: [
    { label: 'Price - Low to High', value: 'price-lh' },
    { label: 'Price - High to Low', value: 'price-hl' },
    { label: 'Ratings - Low to High', value: 'rating-lh' },
    { label: 'Ratings - High to Low', value: 'rating-hl' },
  ],
};
