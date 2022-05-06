import { Router } from 'express';

import { createUserDoc } from '../utils/createDoc';
import asyncHandler from '../middlewares/asyncHandler';
import getRandomAvatar from '../utils/getRandomAvatar';
import getUniqueName from '../utils/getUniqueName';
import sanityClient from '../utils/sanityClient';

const router = Router();

router.get('/', asyncHandler(async (_, res) => {
  const name = getUniqueName();
  const avatar = await getRandomAvatar(name);
  const uploadedImage = await sanityClient.upload(Buffer.from(avatar), 'image', { filename: name });
  const data = await sanityClient.create(createUserDoc({ name, uploadedImage }));

  res.json({ status: 200, message: 'ok', data });
}));

export default router;
