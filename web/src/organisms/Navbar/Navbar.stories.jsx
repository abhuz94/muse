/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Navbar from './Navbar';
import UserProvider from '../../contexts/userContext';

const user = {
  id: 'dbTx7Zg3RHkVbMMwycyKBu',
  name: 'Ki-Adi-Mundi',
  avatar: 'https://cdn.sanity.io/images/zvnwubmx/dev/645071314c8db15c7b57056c99d7ad8cb60c628a-762x762.svg',
};

function Template(args) {
  return (
    <UserProvider user={user}>
      <Navbar {...args} />
    </UserProvider>
  );
}

export default {
  title: 'Design System/Organisms/Navbar',
  component: Navbar,
};

export const Default = Template.bind({});
