/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Label from './Label';

function Template(args) {
  return <Label {...args}>Sample Label</Label>;
}

export default {
  title: 'Design System/Atoms/Label',
  component: Label,
};

export const Default = Template.bind({});
