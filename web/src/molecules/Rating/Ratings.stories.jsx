/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import Rating from './Rating';

function Template(args) {
  // eslint-disable-next-line react/destructuring-assignment
  const [rating, setRating] = useState(args.rating);

  return <Rating {...args} initialRating={rating} onUpdate={setRating} />;
}

export default {
  title: 'Design System/Molecules/Rating',
  component: Rating,
};

export const Default = Template.bind({});
Default.args = { rating: 4.5 };
