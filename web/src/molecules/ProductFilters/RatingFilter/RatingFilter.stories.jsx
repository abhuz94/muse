/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import RatingFilter from './RatingFilter';

function Template(args) {
  const [query, setQuery] = useState({ key: 'rating', q: '' });

  return (
    <div className="w-72">
      <input className="mb-4 italic text-sm text-gray-400 w-full" value={query.q} readOnly />
      <RatingFilter {...args} onQueryUpdate={setQuery} />
    </div>
  );
}

export default {
  title: 'Design System/Molecules/Filters/Rating Filter',
  component: RatingFilter,
  parameters: {
    layout: 'centered',
  },
};

export const Default = Template.bind({});
