import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

function Button({
  text, disabled, onClick, classes,
}) {
  return (
    <button type="button" disabled={disabled} className={classes} onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  classes: '',
  disabled: false,
  onClick: _noop,
};

export default Button;
