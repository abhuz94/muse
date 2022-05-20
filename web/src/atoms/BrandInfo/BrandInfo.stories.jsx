/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import BrandInfo from './BrandInfo';

function Template(args) {
  return <BrandInfo {...args} />;
}

export default {
  title: 'Design System/atoms/Brand Info',
  component: BrandInfo,
};

export const Verified = Template.bind({});
Verified.args = {
  name: 'JBL',
  isVerified: true,
};

export const Unverified = Template.bind({});
Unverified.args = {
  name: 'JBL',
};

export const CustomPrefix = Template.bind({});
CustomPrefix.args = {
  name: 'JBL',
  prefix: 'from',
  isVerified: true,
};
