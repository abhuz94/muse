/* eslint-disable react/jsx-props-no-spreading */

import { RiDeleteBin6Line } from 'react-icons/ri';
import React, { useState } from 'react';

import Button, { BUTTON_TYPES } from '../../atoms/Button';
import CounterButton from './CounterButton';

function DecrementButton(props) {
  return <Button {...props} type={BUTTON_TYPES.DANGER}><RiDeleteBin6Line size={16} /></Button>;
}

function Template(args) {
  const [value, setValue] = useState(1);
  const { DecrementButton: DecrementButtonComponent } = args;

  return (
    <CounterButton
      {...args}
      value={value}
      onIncrement={setValue}
      onDecrement={setValue}
      DecrementButton={value === 1 && DecrementButtonComponent ? DecrementButtonComponent : null}
    />
  );
}

export default {
  title: 'Design System/Molecules/CounterButton',
  component: CounterButton,
  argTypes: {
    value: { control: false },
    DecrementButton: { control: false },
  },
};

export const Default = Template.bind({});
Default.args = {
  min: 1,
  max: 99,
};

export const Custom = Template.bind({});
Custom.args = {
  min: 0,
  max: 99,
  DecrementButton,
};
