import PropTypes from 'prop-types';
import React from 'react';

import Image from '../../atoms/Image';
import _get from '../../utils/_get';

function ProductReview({ review }) {
  return (
    <div className="p-4 border border-gray-200 shadow-2xl sm:flex sm:gap-5">
      <div>
        <div className="m-auto w-24 h-24 rounded-full overflow-hidden sm:m-px">
          <Image src={_get(review, 'user.image')} unoptimized />
        </div>
        <div className="mt-4">
          <p className="font-bold text-sm text-center text-gray-600">{_get(review, 'user.name')}</p>
        </div>
      </div>
      <div className="mt-4 flex-col grow text-sm sm:mt-0">
        <div><p>{review.body}</p></div>
        <div className="text-xs text-right italic text-gray-400">
          2 hours ago
        </div>
      </div>
    </div>
  );
}

ProductReview.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
    body: PropTypes.string,
  }).isRequired,
};

export default ProductReview;
