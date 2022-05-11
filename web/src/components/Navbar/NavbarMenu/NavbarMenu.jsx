import { RiRedPacketLine, RiUser3Line, RiXingLine } from 'react-icons/ri';
import Image from 'next/image';
import React from 'react';
import _get from '../../../utils/_get';

import { useUser } from '../../../contexts/userContext';
import Cart from './Icons/Cart';
import PropertyControlledComponent from '../../PropertyControlledComponent';
import Wishlist from './Icons/Wishlist';

function NavbarMenu() {
  const { user } = useUser();

  return (
    <ul className="flex flex-col justify-center items-center">
      <li className="navbar-icon"><RiXingLine size="28" /></li>
      <li className="w-full"><div className="navbar-hr" /></li>
      <li className="navbar-icon"><Wishlist /></li>
      <li className="navbar-icon"><Cart /></li>
      <li className="navbar-icon"><RiRedPacketLine size="28" /></li>
      <li className="w-full"><div className="navbar-hr" /></li>
      <li className="navbar-icon">
        <PropertyControlledComponent shouldRender={user}>
          <Image width="32" height="32" src={_get(user, 'avatar')} />
        </PropertyControlledComponent>
        <PropertyControlledComponent shouldRender={!user}>
          <RiUser3Line size="28" />
        </PropertyControlledComponent>
      </li>
    </ul>
  );
}

export default NavbarMenu;
