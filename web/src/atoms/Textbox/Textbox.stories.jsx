/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import Textbox from './Textbox';

function Template(args) {
  const [value, setValue] = useState('');

  return <Textbox {...args} value={value} onInput={setValue} onChange={setValue} />;
}

export default {
  title: 'Design System/Atoms/Textbox',
  component: Textbox,
};

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: 'input',
  placeholder: 'Enter Text',
};
