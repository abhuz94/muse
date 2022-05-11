import clientFetch from '../../../utils/clientFetch';

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/review/`;

export const updateReview = async (body) => clientFetch(API_ENDPOINT, {
  method: 'PATCH',
  body: JSON.stringify(body),
});

export const insertReview = () => {};
