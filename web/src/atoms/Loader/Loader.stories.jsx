/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { LOADER_DIMENSIONS } from './Loader.constants';
import Loader from './Loader';

function Template(args) {
  return <Loader {...args} />;
}

export default {
  title: 'Design System/Atoms/Loader',
  component: Loader,
};

export const Small = Template.bind({});
Small.args = {
  dim: LOADER_DIMENSIONS.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  dim: LOADER_DIMENSIONS.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  dim: LOADER_DIMENSIONS.LARGE,
};

export const XLarge = Template.bind({});
XLarge.args = {
  dim: LOADER_DIMENSIONS.XLARGE,
};

export const XXLarge = Template.bind({});
XXLarge.args = {
  dim: LOADER_DIMENSIONS.XXLARGE,
};
