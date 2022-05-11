import express from 'express';
import _get from 'lodash/get';

import cartRoute from './routes/cart';
import userRoute from './routes/user';
import queryRoute from './routes/query';
import reviewRoute from './routes/review';
import wishlistRoute from './routes/wishlist';

const app = express();

app.use('/api/cart', cartRoute);
app.use('/api/query', queryRoute);
app.use('/api/user', userRoute);
app.use('/api/review', reviewRoute);
app.use('/api/wishlist', wishlistRoute);

app.use((_, __, next) => next({ status: 404, message: 'not found' }));
// eslint-disable-next-line no-unused-vars
app.use((err, _, res, __) => {
  const status = _get(err, 'status', 500);
  const message = _get(err, 'message', 'internal server error');

  res.status(status).json({ status, message });
});

export const config = {
  api: {
    externalResolver: true,
  },
};

export default app;
