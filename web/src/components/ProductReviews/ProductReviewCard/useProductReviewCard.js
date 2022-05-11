import { useRef, useState } from 'react';
import _set from 'lodash/set';
import _get from '../../../utils/_get';

import clientFetch from '../../../utils/clientFetch';

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/review/`;

const INITIAL_REVIEW_FORM_STATE = {
  isEditable: false,
  isEditing: false,
  syncing: false,
  review: null,
};

export default function useProductReviewCart({ review, userID }) {
  const reviewPatches = useRef(review);
  const [reviewFormState, setReviewFormState] = useState({
    ...INITIAL_REVIEW_FORM_STATE,
    review,
    isEditable: _get(review, 'user.id') === userID,
  });
  const onInputHandler = (e) => {
    _set(reviewPatches.current, e.target.getAttribute('data-key'), e.target.innerText);
  };
  const updateReview = async () => {
    const body = reviewPatches.current;
    const updatedReview = await clientFetch(`${API_ENDPOINT}/${review.id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });

    setReviewFormState({ ...reviewFormState, review: updatedReview });

    reviewPatches.current = updatedReview;
  };

  return { reviewFormState, onInputHandler, updateReview };
}
