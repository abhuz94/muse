import { useEffect, useState } from 'react';

import { SanityClient } from '../../utils/sanityClient';
import _get from '../../utils/_get';

export default function useProductReviews(productID, userID) {
  const [data, setData] = useState({
    syncing: false,
    reviews: [],
    error: null,
  });

  const fetchReviews = async (id) => SanityClient.fetch(`
    *[_type == "review" && product._ref == "${id}"] {
      "id": _id,
      "createdAt": _createdAt,
      "user": user->{name, "id": _id},
      title,
      description,
      "likes": count((reviewOpinions[]->opinion)[@ == true]),
      "dislikes": count((reviewOpinions[]->opinion)[@ == false]),
      "opinion": (*[_type == "reviewOpinion" && review._ref == ^._id && user._ref == "${userID}"].opinion)[0]
    }
  `);

  useEffect(() => {
    if (productID) {
      fetchReviews(productID)
        .then((res) => setData({
          ...data, syncing: false, error: null, reviews: _get(res, 'data', []),
        }))
        .catch((error) => setData({
          ...data, syncing: false, error, reviews: [],
        }));
    }
  }, [productID]);

  return data;
}
