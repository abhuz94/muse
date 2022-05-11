import { Router } from 'express';

import { insertReview, updateReview } from '../controllers/reviewController';
import asyncHandler from '../middlewares/asyncHandler';

const router = Router();

router.post('/', asyncHandler(insertReview));

router.patch('/:reviewID', asyncHandler(updateReview));

export default router;
