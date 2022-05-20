import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';
import _get from '../../utils/_get';

import { useUser } from '../../contexts/userContext';
import ProductReview from '../../molecules/ProductReview';
import ReviewForm from '../../molecules/ReviewForm';
import useProductReviews from './useProductReviews';

function ProductReviews({ productID }) {
  const { user } = useUser();
  const { reviews } = useProductReviews(productID, _get(user, 'id'));

  return (
    <div>
      <h2 className="text-4xl">Product Reviews</h2>
      <ReviewForm onSave={(v) => console.log(v)} />
      <div className="mt-8 flex">
        {_map(reviews, (review) => (
          <ProductReview
            review={review}
            userID={_get(user, 'id')}
            key={review.id}
          />
        ))}
      </div>
    </div>
  );
}

ProductReviews.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default ProductReviews;
