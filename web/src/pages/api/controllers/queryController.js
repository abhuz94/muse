import sanityClient from '../utils/sanityClient';

// eslint-disable-next-line import/prefer-default-export
export const fetchQuery = async (req, res) => {
  const { q } = req.query;
  const data = await sanityClient.fetch(q);

  res.status(200).json({ status: 200, message: 'ok', data });
};
