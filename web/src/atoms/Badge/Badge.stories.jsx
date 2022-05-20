/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Badge from './Badge';

function Template(args) {
  return <Badge {...args} />;
}

export default {
  title: 'Design System/Atoms/Badge',
  component: Badge,
};

export const Default = Template.bind({});

export const DefaultMax = Template.bind({});
DefaultMax.args = {
  count: 100,
};
