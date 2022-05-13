import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import _map from 'lodash/map';
import _noop from 'lodash/noop';

const FILTER_KEY = 'brand->slug.current';
const FILTER_NAME = 'brand';

function BrandFilter({ brands, onUpdate }) {
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const onChangeHandler = (e) => {
    const brandValue = e.target.getAttribute('data-value');
    const selectedBrandsCopy = new Set(Array.from(selectedBrands));

    if (e.target.checked) {
      selectedBrandsCopy.add(`"${brandValue}"`);
    } else { selectedBrandsCopy.delete(`"${brandValue}"`); }

    setSelectedBrands(selectedBrandsCopy);
  };

  useEffect(() => {
    onUpdate({ key: FILTER_KEY, name: FILTER_NAME, value: Array.from(selectedBrands) });
  }, [selectedBrands]);

  return _map(brands, (brand) => (
    <div className="flex items-center gap-2 text-sm" key={brand.value}>
      <input
        data-value={brand.value}
        type="checkbox"
        checked={selectedBrands.has(`"${brand.value}"`)}
        onChange={onChangeHandler}
      />
      <div>{brand.displayName}</div>
    </div>
  ));
}

BrandFilter.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onUpdate: PropTypes.func,
};

BrandFilter.defaultProps = {
  onUpdate: _noop,
};

export default BrandFilter;
