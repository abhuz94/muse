import { Router } from 'express';

import asyncHandler from '../middlewares/asyncHandler';

const router = Router();

router.get('/', asyncHandler(async (_, res) => {
  res.status(200).end();
}));

export default router;
