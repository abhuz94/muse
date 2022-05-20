import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import _noop from 'lodash/noop';

import Star from '../../atoms/Star';

function Rating({ initialRating, maxRating, onUpdate }) {
  const [rating, setRating] = useState(initialRating);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];

    for (let i = 1; i <= maxRating; i += 1) {
      newStars.push(
        <Star
          key={i}
          index={i}
          isFull={i <= rating}
          isFraction={i - rating >= 0.1 && i - rating <= 0.9}
          onClick={onUpdate}
          onMouseMove={setRating}
        />,
      );
    }

    setStars(newStars);
  }, [rating]);

  return (
    <div className="flex text-yellow-400" onMouseLeave={() => setRating(initialRating)}>
      {stars}
    </div>
  );
}

Rating.propTypes = {
  initialRating: PropTypes.number,
  maxRating: PropTypes.number,
  onUpdate: PropTypes.func,
};

Rating.defaultProps = {
  initialRating: 0,
  maxRating: 5,
  onUpdate: _noop,
};

export default Rating;
