/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import InputRange from './InputRange';

export default {
  title: 'Design System/Atoms/InputRange',
  component: InputRange,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  const { initialValues } = args;
  const [values, setValues] = useState(initialValues);

  return <div className="w-72"><InputRange {...args} values={values} onChange={setValues} /></div>;
}

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 5000,
  initialValues: [0, 5000],
};

export const Overlap = Template.bind({});
Overlap.args = {
  min: 0,
  max: 5000,
  initialValues: [0, 520],
};
