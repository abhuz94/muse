import { Router } from 'express';

import { createUser } from '../controllers/userController';
import asyncHandler from '../middlewares/asyncHandler';

const router = Router();

router.post('/', asyncHandler(createUser));

export default router;
