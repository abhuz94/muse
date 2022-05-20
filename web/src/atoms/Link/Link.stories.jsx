/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Link from './Link';

function Template(args) {
  return <Link {...args}>Sample Link</Link>;
}

export default {
  title: 'Design System/Atoms/Link',
  component: Link,
};

export const Default = Template.bind({});
