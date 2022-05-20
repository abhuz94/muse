import { RiXingLine } from 'react-icons/ri';
import React from 'react';

import NavbarIcon from '../../../../atoms/NavbarIcon';
import withLink from '../../../../hocs/withLink';

function Home() {
  return (
    <NavbarIcon className="h-12 w-12">
      <RiXingLine className="md:m-auto" size={32} />
    </NavbarIcon>
  );
}

export default withLink(Home, '/');
