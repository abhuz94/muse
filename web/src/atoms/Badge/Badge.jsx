import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const MAX_COUNT = 99;

function Badge({ count, className }) {
  return (
    <span
      className={
        cx(
          'w-8 h-8 rounded-full text-xs bg-red-500 text-stone-50 font-thin truncate',
          'flex items-center justify-center z-10',
          className,
        )
      }
    >
      {count > MAX_COUNT ? `${MAX_COUNT}+` : count}
    </span>
  );
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
