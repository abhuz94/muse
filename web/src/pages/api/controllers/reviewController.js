import _pick from 'lodash/pick';

import { createReviewDoc } from '../utils/createDoc';
import sanityClient from '../utils/sanityClient';

export const insertReview = async (req, res) => {
  const {
    title, description, userID, productID,
  } = req.body;

  const review = await sanityClient.create(createReviewDoc({
    title, description, userID, productID,
  }));

  res.status(200).send({ status: 200, message: 'ok', data: review });
};

export const updateReview = async (req, res) => {
  const { reviewID } = req.params;

  const review = await sanityClient.patch(
    reviewID,
    _pick(req.body, ['title', 'description', 'likes', 'dislikes']),
  );

  res.status(200).send({ status: 200, message: 'ok', data: review });
};
