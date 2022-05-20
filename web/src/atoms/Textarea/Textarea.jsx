import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';
import cx from 'classnames';
import _noop from 'lodash/noop';

function Textarea({
  className, id, value, onChange, onInput,
}) {
  const valueRef = useRef(value);

  return (
    <div
      id={id}
      className={
        cx('min-h-[4rem] p-1 border-b border-b-gray-200 text-sm outline-0 cursor-text focus:border-b-gray-800', className)
      }
      onInput={(e) => onInput(e.target.innerText)}
      onBlur={(e) => onChange(e.target.innerText)}
      suppressContentEditableWarning
      contentEditable
    >
      {valueRef.current}
    </div>
  );
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
};

Textarea.defaultProps = {
  className: '',
  value: '',
  onChange: _noop,
  onInput: _noop,
};

export default memo(Textarea);
