import { Router } from 'express';

import { getCart, upsertProduct, removeProduct } from '../controllers/cartController';
import asyncHandler from '../middlewares/asyncHandler';

const router = Router();

router.get('/:userID', asyncHandler(getCart));

router.put('/:userID', asyncHandler(upsertProduct));

router.delete('/:userID', asyncHandler(removeProduct));

export default router;
