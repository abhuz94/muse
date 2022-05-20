import { RiTimeLine } from 'react-icons/ri';
import React from 'react';

import NavbarIcon from '../../../../atoms/NavbarIcon';
import withLink from '../../../../hocs/withLink';

function Order() {
  return (
    <NavbarIcon className="h-12 w-12">
      <RiTimeLine size={22} />
    </NavbarIcon>
  );
}

export default withLink(Order, '/my-orders');
