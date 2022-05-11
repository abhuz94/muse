import PropTypes from 'prop-types';
import React from 'react';

const MAX_COUNT = 99;

function Badge({ count, className }) {
  return <span className={className}>{count > MAX_COUNT ? `${MAX_COUNT}+` : count}</span>;
}

Badge.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
};

Badge.defaultProps = {
  count: 0,
  className: '',
};

export default Badge;
