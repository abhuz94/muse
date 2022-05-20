import PropTypes from 'prop-types';
import React, { memo } from 'react';
import cx from 'classnames';
import _noop from 'lodash/noop';

function Textbox({
  className, id, placeholder, value, onInput, onChange,
}) {
  return (
    <input
      id={id}
      className={cx('w-full p-2 border-b border-b-gray-200 text-sm outline-0 focus:border-b-gray-800', className)}
      type="text"
      placeholder={placeholder}
      value={value}
      onInput={(e) => onInput(e.target.value)}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

Textbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
};

Textbox.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
  onInput: _noop,
  onChange: _noop,
};

export default memo(Textbox);
