import { RiFilter2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import _noop from 'lodash/noop';

import { BrandFilter, PriceFilter, RatingFilter } from '../../molecules/ProductFilters';
import Button from '../../atoms/Button';
import PropertyControlledComponent from '../../atoms/PropertyControlledComponent';
import useResize from '../../hooks/useResize';

const brands = [
  { label: 'Boat', value: 'boat' },
  { label: 'JBL', value: 'jbl' },
  { label: 'Sony', value: 'sony' },
  { label: 'TWS', value: 'tws' },
];

function ProductFilter({ onUpdate }) {
  const { width } = useResize();
  const [appliedFilters, setAppliedFilters] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const queryUpdateHandler = ({ key, q }) => {
    setAppliedFilters((prevFilters) => ({ ...prevFilters, [key]: q }));
  };

  useEffect(() => setIsFilterVisible(width >= 1024), []);
  useEffect(() => onUpdate(appliedFilters), [appliedFilters]);

  return (
    <div className="mx-2">
      <Button className="lg:hidden" rounded onClick={() => setIsFilterVisible(!isFilterVisible)}>
        <RiFilter2Line size={16} />
      </Button>
      <PropertyControlledComponent shouldRender={isFilterVisible}>
        <div className="max-w-lg bg-stone-50 border p-8 z-40 lg:max-w-xs lg:border-none lg:p-0 lg:shadow-none">
          <h3 className="underline text-center lg:text-left">Filters</h3>
          <div className="mt-8">
            <h4 className="mb-4 uppercase text-sm text-gray-400">Brands</h4>
            <BrandFilter
              brands={brands}
              preselectedBrands={[brands[0], brands[3]]}
              onQueryUpdate={queryUpdateHandler}
            />
          </div>
          <div className="mt-8">
            <h4 className="mb-4 uppercase text-sm text-gray-400">Ratings</h4>
            <RatingFilter
              onQueryUpdate={queryUpdateHandler}
            />
          </div>
          <div className="mt-8">
            <h4 className="mb-16 uppercase text-sm text-gray-400">Price</h4>
            <div className="mx-4 lg:mx-0">
              <PriceFilter
                onQueryUpdate={queryUpdateHandler}
              />
            </div>
          </div>
        </div>
      </PropertyControlledComponent>
    </div>
  );
}

ProductFilter.propTypes = {
  onUpdate: PropTypes.func,
};

ProductFilter.defaultProps = {
  onUpdate: _noop,
};

export default ProductFilter;
