import { AiTwotoneHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { SiMusicbrainz } from 'react-icons/si';
import { TiUser } from 'react-icons/ti';
import Image from 'next/image';
import React from 'react';
import _get from '../../../utils/_get';

import { useCart } from '../../../contexts/cartContext';
import { useUser } from '../../../contexts/userContext';
import Badge from '../../Badge';
import ProprtyControlledComponent from '../../PropertyControlledComponent';

function NavbarMenu() {
  const { user } = useUser();
  const { state: { cart } } = useCart();

  console.log(cart);

  return (
    <ul className="flex flex-col justify-center items-center">
      <li className="navbar-icon"><SiMusicbrainz size="28" /></li>
      <li className="w-full"><div className="navbar-hr" /></li>
      <li className="navbar-icon">
        <AiTwotoneHeart size="28" />
        <Badge className="navbar-icon-badge" />
      </li>
      <li className="navbar-icon">
        <HiShoppingCart size="28" />
        <Badge className="navbar-icon-badge" />
      </li>
      <li className="navbar-icon">
        <ProprtyControlledComponent shouldRender={user}>
          <Image width="32" height="32" src={_get(user, 'avatar')} />
        </ProprtyControlledComponent>
        <ProprtyControlledComponent shouldRender={!user}>
          <TiUser size="28" />
        </ProprtyControlledComponent>
      </li>
    </ul>
  );
}

export default NavbarMenu;
