import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';
import _get from '../../utils/_get';

import { useUser } from '../../contexts/userContext';
import ProductReviewCard from './ProductReviewCard';
import useProductReviews from './useProductReviews';

function ProductReviews({ productID }) {
  const { user } = useUser();
  const { reviews } = useProductReviews(productID, _get(user, 'id'));

  return (
    <div className="text-white">
      <h2 className="text-4xl">Product Reviews</h2>
      <div className="mt-8">
        {_map(reviews, (review) => (
          <ProductReviewCard
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
