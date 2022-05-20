/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Image from './Image';

function Template(args) {
  return (
    <div className="w-72 h-72 relative">
      <Image {...args} />
    </div>
  );
}

export default {
  title: 'Design System/Atoms/Image',
  component: Image,
};

export const Default = Template.bind({});
Default.args = {
  src: 'https://cdn.sanity.io/images/zvnwubmx/dev/ac3a435778213231ca5b911efcf899f814b7422e-1000x600.webp',
  unoptimized: true,
};

export const Broken = Template.bind({});
Broken.args = {
  src: 'https://cdn.sanity.io/images/zvnwubmx/dev/ac3a435778213231ca5b911efcf899f814b7422e-1000x600.webpx',
  unoptimized: true,
  width: 288,
  height: 288,
};

export const Error = Template.bind({});
Error.args = {
  src: 'https://cdn.sanity.io/images/zvnwubmx/dev/ac3a435778213231ca5b911efcf899f814b7422e-1000x600.webp',
  width: 288,
  height: 288,
};
