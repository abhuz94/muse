import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import _noop from 'lodash/noop';

import { toGROQ } from './RatingFilter.utils';
import Star from '../../../atoms/Star';

const RATINGS = [5, 4, 3, 2, 1];
const FILTER_KEY = 'rating';

function RatingRow({ rating, isActive, onClick }) {
  const stars = [];

  for (let i = 0; i < rating; i += 1) {
    stars.push(<Star key={i} index={i} isFull={isActive} size={18} />);
  }

  return (
    <div
      role="button"
      className={cx('hover:text-yellow-400 transition-colors duration-200', { 'text-yellow-400': isActive })}
      tabIndex={0}
      onClick={() => onClick(rating)}
      onKeyDown={() => onClick(rating)}
    >
      {stars}
    </div>
  );
}

function RatingFilter({ onQueryUpdate }) {
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    onQueryUpdate({ key: FILTER_KEY, q: toGROQ(FILTER_KEY, selectedRating) });
  }, [selectedRating]);

  return (
    <div className="flex flex-col text-xs">
      {RATINGS.map((rating) => (
        <RatingRow
          rating={rating}
          key={rating}
          isActive={selectedRating === rating}
          onClick={setSelectedRating}
        />
      ))}
    </div>
  );
}

RatingFilter.propTypes = {
  onQueryUpdate: PropTypes.func,
};

RatingFilter.defaultProps = {
  onQueryUpdate: _noop,
};

RatingRow.propTypes = {
  rating: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

RatingRow.defaultProps = {
  isActive: false,
  onClick: _noop,
};

export default RatingFilter;
