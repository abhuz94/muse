/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import RatingBadge from './RatingBadge';

function Template(args) {
  return <RatingBadge {...args} />;
}

export default {
  title: 'Design System/Atoms/Rating Badge',
  component: RatingBadge,
};

export const Success = Template.bind({});
Success.args = { rating: 4.3 };

export const Warn = Template.bind({});
Warn.args = { rating: 2.3 };

export const Danger = Template.bind({});
Danger.args = { rating: 1.3 };
