/* eslint-disable react/jsx-props-no-spreading */

import { RiShoppingCartLine } from 'react-icons/ri';
import React from 'react';

import NavbarIcon from './NavbarIcon';

function Template(args) {
  return <NavbarIcon {...args}><RiShoppingCartLine /></NavbarIcon>;
}

export default {
  title: 'Design System/Atoms/Navbar Icon',
  component: NavbarIcon,
};

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
