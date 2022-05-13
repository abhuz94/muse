import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import _noop from 'lodash/noop';

import PropertyControlledComponent from '../../PropertyControlledComponent';
import Rating from '../../Rating';

const RATINGS = [5, 4, 3, 2, 1];
const FILTER_KEY = 'avgRating';
const FILTER_NAME = 'rating';

function RatingFilter({ onUpdate }) {
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    onUpdate({ key: FILTER_KEY, name: FILTER_NAME, value: selectedRating });
  }, [selectedRating]);

  return (
    <div>
      {RATINGS.map((rating) => (
        <button
          key={rating}
          type="button"
          className={cs('flex items-center gap-2', { 'mt-4': rating !== 5 })}
          onClick={() => setSelectedRating(rating)}
        >
          <Rating maxRating={rating} currentRating={rating} />
          <PropertyControlledComponent shouldRender={rating !== 5}>
            <span className="text-sm">& up</span>
          </PropertyControlledComponent>
        </button>
      ))}
    </div>
  );
}

RatingFilter.propTypes = {
  onUpdate: PropTypes.func,
};

RatingFilter.defaultProps = {
  onUpdate: _noop,
};

export default RatingFilter;
