import NoUISlider from 'nouislider-react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import _noop from 'lodash/noop';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'nouislider/distribute/nouislider.css';

const FILTER_KEY = 'price';

function PriceFilter({
  min, max, start, end, onUpdate,
}) {
  const isMounted = useRef(false);
  const [range, setRange] = useState({ min, max });
  const onUpdateHanlder = (_, __, [newMin, newMax]) => {
    if (newMin !== range.min || newMax !== range.max) {
      setRange({ min: newMin, max: newMax });
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      onUpdate({ key: FILTER_KEY, name: FILTER_KEY, value: range });
    } else { isMounted.current = true; }
  }, [range]);

  return (
    <NoUISlider
      range={{ min, max }}
      start={[start, end]}
      onUpdate={onUpdateHanlder}
      connect
    />
  );
}

PriceFilter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  onUpdate: PropTypes.func,
};

PriceFilter.defaultProps = {
  onUpdate: _noop,
};

export default PriceFilter;
