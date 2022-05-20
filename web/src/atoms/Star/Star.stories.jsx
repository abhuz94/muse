/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Star from './Star';

function Template(args) {
  return <Star {...args} />;
}

export default {
  title: 'Design System/Atoms/Star',
  component: Star,
};

export const Default = Template.bind({});
Default.args = {
  index: 0,
};

export const Fraction = Template.bind({});
Fraction.args = {
  index: 0,
  isFraction: true,
};

export const Full = Template.bind({});
Full.args = {
  index: 0,
  isFull: true,
};
