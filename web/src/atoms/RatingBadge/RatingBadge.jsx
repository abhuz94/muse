import PropTypes from 'prop-types';
import React from 'react';

import QuickInfoBadge, { QUICK_INFO_BADGE_TYPES } from '../QuickInfoBadge';
import Star from '../Star';

const getType = (rating) => {
  if (rating >= 4) {
    return QUICK_INFO_BADGE_TYPES.SUCCESS;
  }

  return rating >= 2 ? QUICK_INFO_BADGE_TYPES.WARN : QUICK_INFO_BADGE_TYPES.DANGER;
};

function RatingBadge({ rating }) {
  return (
    <div className="inline-block select-none">
      <QuickInfoBadge type={getType(rating)}>
        <span>{rating}</span>
        <span><Star index={0} size={16} isFull /></span>
      </QuickInfoBadge>
    </div>
  );
}

RatingBadge.propTypes = {
  rating: PropTypes.number,
};

RatingBadge.defaultProps = {
  rating: 1,
};

export default RatingBadge;
