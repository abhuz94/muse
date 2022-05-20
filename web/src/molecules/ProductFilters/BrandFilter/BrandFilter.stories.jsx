/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import BrandFilter from './BrandFilter';
import PropertyControlledComponent from '../../../atoms/PropertyControlledComponent';

function Template(args) {
  const [query, setQuery] = useState({ key: 'brand', q: '' });

  return (
    <div className="w-72">
      <BrandFilter {...args} onQueryUpdate={setQuery} />
      <PropertyControlledComponent shouldRender={query.q}>
        <input className="mt-4 italic text-sm text-gray-400" value={query.q} readOnly />
      </PropertyControlledComponent>
    </div>
  );
}

export default {
  title: 'Design System/Molecules/Filters/Brand Filter',
  component: BrandFilter,
};

export const Default = Template.bind({});
Default.args = {
  brands: [
    { label: 'Boat', value: 'boat' },
    { label: 'JBL', value: 'jbl' },
    { label: 'Sony', value: 'sony' },
    { label: 'TWS', value: 'tws' },
  ],
  preselectedBrands: [
    { label: 'JBL', value: 'jbl' },
    { label: 'Sony', value: 'sony' },
  ],
};
