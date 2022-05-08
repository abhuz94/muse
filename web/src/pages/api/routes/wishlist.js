import { Router } from 'express';

import { getList, addProduct, removeProduct } from '../controllers/wishlistController';
import asyncHandler from '../middlewares/asyncHandler';

const router = Router();

router.get('/:userID', asyncHandler(getList));

router.post('/:userID', asyncHandler(addProduct));

router.delete('/:userID', asyncHandler(removeProduct));

export default router;
