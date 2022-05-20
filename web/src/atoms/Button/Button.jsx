import PropTypes from 'prop-types';
import React from 'react';
import cs from 'classnames';
import _noop from 'lodash/noop';

import { BUTTON_STYLES, BUTTON_TYPES } from './Button.constants';
import Loader from '../Loader';
import PropertyControlledComponent from '../PropertyControlledComponent';
import _get from '../../utils/_get';

function Button({
  children, className, disabled, label, loading, rounded, type, onClick,
}) {
  return (
    <button
      type="button"
      className={
        cs(
          'flex justify-center items-center text-sm transition-300',
          _get(BUTTON_STYLES, [type, 'className'], ''),
          {
            'px-8 py-4 rounded-sm gap-1': !rounded,
            'w-14 h-14 rounded-full': rounded,
            [_get(BUTTON_STYLES, [type, 'disabled'])]: disabled,
            [_get(BUTTON_STYLES, [type, '!allowed'])]: disabled || loading,
            [_get(BUTTON_STYLES, [type, '!disabled'])]: !disabled && !loading,
          },
          className,
        )
      }
      disabled={disabled}
      onClick={disabled || loading ? null : onClick}
    >
      <PropertyControlledComponent shouldRender={loading}>
        <Loader />
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={!loading}>
        <span>{label}</span>
        <PropertyControlledComponent shouldRender={children}>
          <span>{children}</span>
        </PropertyControlledComponent>
      </PropertyControlledComponent>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(BUTTON_STYLES)),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: '',
  loading: false,
  className: '',
  children: [],
  disabled: false,
  rounded: false,
  type: BUTTON_TYPES.PRIMARY,
  onClick: _noop,
};

export default Button;
