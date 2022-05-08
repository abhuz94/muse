import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import Button from '../Button';

function CounterButton({
  min,
  max,
  value,
  onIncrement,
  onDecrement,
}) {
  return (
    <div>
      <Button text="+" onClick={() => onIncrement(value + 1)} disabled={value >= max} />
      <span>{value}</span>
      <Button text="-" onClick={() => onDecrement(value - 1)} disabled={value <= min} />
    </div>
  );
}

CounterButton.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

CounterButton.defaultProps = {
  min: 0,
  max: 0,
  value: 0,
  onIncrement: _noop,
  onDecrement: _noop,
};

export default CounterButton;
