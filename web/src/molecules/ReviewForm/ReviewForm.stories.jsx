/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import ReviewForm from './ReviewForm';

function Template(args) {
  return <ReviewForm {...args} />;
}

export default {
  title: 'Design System/Molecules/Review Form',
  component: ReviewForm,
};

export const Default = Template.bind({});
