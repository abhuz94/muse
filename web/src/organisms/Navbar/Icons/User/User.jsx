import { RiUser5Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';

import Image from '../../../../atoms/Image';
import NavbarIcon from '../../../../atoms/NavbarIcon';
import withLink from '../../../../hocs/withLink';

function User({ user }) {
  return (
    <NavbarIcon className="h-12 w-12">
      {
        user
          ? <Image width={42} height={42} objectFit="contain" src={_get(user, 'avatar', '#')} />
          : <RiUser5Line size={18} />
      }
    </NavbarIcon>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

User.defaultProps = {
  user: null,
};

export default withLink(User, 'my-profile');
