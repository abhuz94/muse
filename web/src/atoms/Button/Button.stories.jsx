/* eslint-disable react/jsx-props-no-spreading */

import { RiArrowRightLine } from 'react-icons/ri';
import React from 'react';

import { BUTTON_TYPES } from './Button.constants';
import Button from './Button';

function Template(args) {
  return <Button {...args} />;
}

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    type: { control: false },
    disabled: { control: false },
    rounded: { control: false },
    children: { control: false },
  },
};

export const Edge = Template.bind({});
Edge.decorators = [
  () => (
    <ul className="flex gap-5">
      {Object.keys(BUTTON_TYPES).map((type) => (
        <li key={type}>
          <Button label={type} type={type} />
        </li>
      ))}
    </ul>
  ),
];

export const Round = Template.bind({});
Round.decorators = [
  () => (
    <ul className="flex gap-5">
      {Object.keys(BUTTON_TYPES).map((type) => (
        <li key={type}>
          <Button label="+" type={type} rounded />
        </li>
      ))}
    </ul>
  ),
];

export const EdgeDisabled = Template.bind({});
EdgeDisabled.decorators = [
  () => (
    <ul className="flex gap-5">
      {Object.keys(BUTTON_TYPES).map((type) => (
        <li key={type}>
          <Button label={type} type={type} disabled />
        </li>
      ))}
    </ul>
  ),
];

export const RoundDisabled = Template.bind({});
RoundDisabled.decorators = [
  () => (
    <ul className="flex gap-5">
      {Object.keys(BUTTON_TYPES).map((type) => (
        <li key={type}>
          <Button label="+" type={type} rounded disabled />
        </li>
      ))}
    </ul>
  ),
];

export const EdgeTrailingIcon = Template.bind({});
EdgeTrailingIcon.decorators = [
  () => (
    <ul className="flex gap-5">
      {Object.keys(BUTTON_TYPES).map((type) => (
        <li key={type}>
          <Button label={type} type={type}>
            <RiArrowRightLine />
          </Button>
        </li>
      ))}
    </ul>
  ),
];

export const EdgeLoading = Template.bind({});
EdgeLoading.decorators = [
  () => (
    <ul className="flex gap-5">
      {Object.keys(BUTTON_TYPES).map((type) => (
        <li key={type}>
          <Button label={type} type={type} loading />
        </li>
      ))}
    </ul>
  ),
];

export const RoundLoading = Template.bind({});
RoundLoading.decorators = [
  () => (
    <ul className="flex gap-5">
      {Object.keys(BUTTON_TYPES).map((type) => (
        <li key={type}>
          <Button label="+" type={type} rounded loading />
        </li>
      ))}
    </ul>
  ),
];
