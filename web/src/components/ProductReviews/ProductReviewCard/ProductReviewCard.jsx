import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Button from '../../Button';
import PropertyControlledComponent from '../../PropertyControlledComponent';
import useProductReviewCard from './useProductReviewCard';

function ProductReviewCard({ review, userID }) {
  const {
    reviewFormState,
    onInputHandler,
    updateReview,
  } = useProductReviewCard({ review, userID });
  const { isEditable } = reviewFormState;

  return (
    <div
      className={cx('review p-4 text-white bg-gray-700', { 'bg-yellow-700': isEditable })}
    >
      <h3
        data-key="title"
        className="text-2xl font-bold"
        contentEditable={isEditable}
        suppressContentEditableWarning
        onInput={onInputHandler}
      >
        {review.title}
      </h3>
      <p
        data-key="description"
        className="mt-4 text-sm break-words"
        contentEditable={isEditable}
        suppressContentEditableWarning
        onInput={onInputHandler}
      >
        {review.description}
      </p>
      <div className="mt-4 review-meta flex justify-between">
        <div className="review-likes-dislikes text-xs inline-flex gap-5">
          <div className="inline-flex items-center gap-1">
            <span>{review.likes}</span>
            <AiFillLike />
          </div>
          <div className="inline-flex  items-center gap-1">
            <span>{review.dislikes}</span>
            <AiFillDislike />
          </div>
        </div>
        <div className="reviewed-date text-xs italic">{DateTime.fromISO(review.createdAt).toRelative()}</div>
      </div>
      <PropertyControlledComponent shouldRender={isEditable}>
        <div className="review-form-controls mt-8">
          <Button text="Update" onClick={updateReview} />
        </div>
      </PropertyControlledComponent>
    </div>
  );
}

ProductReviewCard.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    createdAt: PropTypes.string,
  }).isRequired,
  userID: PropTypes.string.isRequired,
};

export default ProductReviewCard;
