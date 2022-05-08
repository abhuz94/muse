// import { middleware as apiCache } from 'apicache';
import { query } from 'express-validator';
import { Router } from 'express';

import { fetchQuery } from '../controllers/queryController';
import asyncHandler from '../middlewares/asyncHandler';
import reqValidator from '../middlewares/reqValidator';

const router = Router();

router.get('/', query('q').isString(), reqValidator, asyncHandler(fetchQuery));

export default router;
