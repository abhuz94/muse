import PropTypes from 'prop-types';
import React from 'react';
import cs from 'classnames';
import _noop from 'lodash/noop';

function Button({
  text, disabled, onClick, className,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cs(
        `bg-gray-800 text-pink-500 font-bold py-4 px-8 
        hover:text-white hover:bg-pink-500 cursor:pointer
        transition-all duration-300 ease-linear`,
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: _noop,
};

export default Button;
