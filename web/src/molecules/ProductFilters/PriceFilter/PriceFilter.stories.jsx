/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import PriceFilter from './PriceFilter';
import PropertyControlledComponent from '../../../atoms/PropertyControlledComponent';

function Template(args) {
  const [query, setQuery] = useState({ key: 'price', q: '' });

  return (
    <div className="w-72">
      <PriceFilter {...args} onQueryUpdate={setQuery} />
      <PropertyControlledComponent shouldRender={query.q}>
        <input className="mt-8 italic text-sm text-center text-gray-400 w-full" value={query.q} readOnly />
      </PropertyControlledComponent>
    </div>
  );
}

export default {
  title: 'Design System/Molecules/Filters/Price Filter',
  component: PriceFilter,
  parameters: {
    layout: 'centered',
  },
};

export const Default = Template.bind({});
