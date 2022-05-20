import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

function Link({ className, href, children }) {
  return (
    <span className={cx('inline text-sm text-gray-400 hover:underline', className)}>
      <NextLink href={href}>{children}</NextLink>
    </span>
  );
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: '',
  href: '#',
};

export default Link;
