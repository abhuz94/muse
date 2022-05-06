import express from 'express';
import _get from 'lodash/get';

import createUserRoute from './routes/createUser';
import queryRoute from './routes/query';

const app = express();

app.use('/api/query', queryRoute);
app.use('/api/createUser', createUserRoute);

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
