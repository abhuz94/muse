import db from '../utils/db';

export const getCart = async (req, res) => {
  const { userID } = req.params;

  res.status(200).json({
    status: '200',
    message: 'ok',
    data: db.get(`carts.${userID}`),
  });
};

export const upsertProduct = async (req, res) => {
  const { userID } = req.params;
  const { product } = req.body;
  const key = `carts.${userID}.${product.id}`;

  await db.upsert(key, product);

  res.status(200).json({
    status: '200',
    message: 'ok',
    data: db.get(key),
  });
};

export const removeProduct = async (req, res) => {
  const { userID } = req.params;
  const { id } = req.body;

  await db.delete(`carts.${userID}.${id}`);

  res.status(200).end();
};
