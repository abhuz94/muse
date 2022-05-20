import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import _noop from 'lodash/noop';

import { toGROQ } from './BrandFilter.utils';
import Select from '../../../atoms/Select';

const FILTER_KEY = 'brand';

function BrandFilter({ preselectedBrands, brands, onQueryUpdate }) {
  const [selectedBrands, setSelectedBrands] = useState(preselectedBrands);

  useEffect(() => {
    onQueryUpdate({ key: FILTER_KEY, q: toGROQ(FILTER_KEY, selectedBrands) });
  }, [selectedBrands]);

  return (
    <Select
      selected={selectedBrands}
      options={brands}
      isMulti
      onChange={setSelectedBrands}
    />
  );
}

BrandFilter.propTypes = {
  preselectedBrands: PropTypes.arrayOf(PropTypes.shape({})),
  brands: PropTypes.arrayOf(PropTypes.shape({})),
  onQueryUpdate: PropTypes.func,
};

BrandFilter.defaultProps = {
  preselectedBrands: [],
  brands: [],
  onQueryUpdate: _noop,
};

export default BrandFilter;
