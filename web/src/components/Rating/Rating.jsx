import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';

function Rating({ maxRating, currentRating }) {
  const ratings = [];
  const hasFraction = currentRating % 1 !== 0;
  let i = 0;

  for (; i < Math.floor(currentRating); i += 1) { ratings.push(<FaStar key={i} />); }

  if (hasFraction) { ratings.push(<FaStarHalfAlt key={i} />); }

  i += Number(hasFraction);

  while (i < maxRating) {
    ratings.push(<FaRegStar key={i} />);

    i += 1;
  }

  return <div className="flex text-[#FDCC4B]">{ratings}</div>;
}

Rating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  currentRating: PropTypes.number,
};

Rating.defaultProps = {
  currentRating: 0,
};

export default Rating;
