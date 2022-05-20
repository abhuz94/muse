import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import _noop from 'lodash/noop';

import { toGROQ } from './PriceFilter.utils';
import InputRange from '../../../atoms/InputRange';

const FILTER_KEY = 'price';

function PriceFilter({
  min, max, initialValues, onQueryUpdate,
}) {
  const [values, setValues] = React.useState(initialValues);

  useEffect(() => {
    onQueryUpdate({ key: FILTER_KEY, q: toGROQ(FILTER_KEY, ...values) });
  }, [values]);

  return (
    <InputRange min={min} max={max} values={values} onChange={setValues}>PriceFilter</InputRange>
  );
}

PriceFilter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  initialValues: PropTypes.arrayOf(PropTypes.number),
  onQueryUpdate: PropTypes.func,
};

PriceFilter.defaultProps = {
  min: 0,
  max: 5000,
  initialValues: [0, 100],
  onQueryUpdate: _noop,
};

export default PriceFilter;
