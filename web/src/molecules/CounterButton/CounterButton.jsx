import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import Button from '../../atoms/Button';

// TODO: add option to provide custom component for increment button

function CounterButton({
  DecrementButton,
  min,
  max,
  value,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="flex items-center gap-2">
      {
        DecrementButton === null
          ? (
            <Button
              className="w-7 h-7"
              disabled={value <= min}
              rounded
              onClick={() => onDecrement(value - 1)}
            >
              <RiSubtractLine />
            </Button>
          )
          : (
            <DecrementButton
              className="w-7 h-7"
              disabled={value >= max}
              rounded
              onClick={() => onIncrement(value + 1)}
            />
          )
      }
      <span className="w-6 text-base text-center">{value}</span>
      <Button
        className="w-7 h-7"
        disabled={value >= max}
        rounded
        onClick={() => onIncrement(value + 1)}
      >
        <RiAddLine />
      </Button>
    </div>
  );
}

CounterButton.propTypes = {
  DecrementButton: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

CounterButton.defaultProps = {
  DecrementButton: null,
  min: 0,
  max: 0,
  value: 0,
  onIncrement: _noop,
  onDecrement: _noop,
};

export default CounterButton;
