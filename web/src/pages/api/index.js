import express from 'express';

const app = express();

app.get('/api', (_, res) => res.json({ message: 'ok', statusCode: 200 }));

export default app;
