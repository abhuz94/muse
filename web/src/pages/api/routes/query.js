// import { middleware as apiCache } from 'apicache';
import { query } from 'express-validator';
import { Router } from 'express';

import asyncHandler from '../middlewares/asyncHandler';
import reqValidator from '../middlewares/reqValidator';
import sanityClient from '../utils/sanityClient';

const router = Router();

router.get('/', query('q').isString(), reqValidator, asyncHandler(async (req, res) => {
  const { q } = req.query;
  const data = await sanityClient.fetch(q);

  res.status(200).json({ status: 200, message: 'ok', data });
}));

export default router;
