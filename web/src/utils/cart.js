import clientFetch from './clientFetch';

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/cart/`;

export const fetchCart = async (userID) => clientFetch(`${API_ENDPOINT}/${userID}`);

export const upsertProduct = async ({ id, product }) => clientFetch(
  `${API_ENDPOINT}/${id}`,
  { method: 'PUT', body: JSON.stringify({ product }) },
);

export const removeProduct = async ({ id, product }) => clientFetch(
  `${API_ENDPOINT}/${id}`,
  { method: 'DELETE', body: JSON.stringify({ id: product.id }) },
);
