import db from '../utils/db';

export const getList = async (req, res) => {
  const { userID } = req.params;

  res.status(200).json({
    status: '200',
    message: 'ok',
    data: db.get(`wishlists.${userID}`),
  });
};

export const addProduct = async (req, res) => {
  const { userID } = req.params;
  const { product } = req.body;
  const key = `wishlists.${userID}.${product.id}`;

  await db.insert(key, product);

  res.status(200).json({
    status: '200',
    message: 'ok',
    data: db.get(key),
  });
};

export const removeProduct = async (req, res) => {
  const { userID } = req.params;
  const { id } = req.body;

  await db.delete(`wishlists.${userID}.${id}`);

  res.status(200).end();
};
