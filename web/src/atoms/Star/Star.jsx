import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import PropertyControlledComponent from '../PropertyControlledComponent';

function Star({
  className, index, size, isFraction, isFull, onClick, onMouseLeave, onMouseMove,
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => onClick(index)}
      onMouseLeave={() => onMouseLeave(index)}
      onMouseMove={() => onMouseMove(index)}
    >
      <PropertyControlledComponent shouldRender={isFull}>
        <RiStarFill size={size} />
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={isFraction}>
        <RiStarHalfFill size={size} />
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={!isFraction && !isFull}>
        <RiStarLine size={size} />
      </PropertyControlledComponent>
    </button>
  );
}

Star.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  size: PropTypes.number,
  isFraction: PropTypes.bool,
  isFull: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
};

Star.defaultProps = {
  className: '',
  size: 24,
  isFraction: false,
  isFull: false,
  onClick: _noop,
  onMouseLeave: _noop,
  onMouseMove: _noop,
};

export default Star;
