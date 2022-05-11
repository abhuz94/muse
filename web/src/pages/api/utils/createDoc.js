import slugify from './slugify';

export const createUserDoc = ({ name, uploadedImage }) => ({
  _type: 'user',
  name,
  slug: {
    _type: 'slug',
    current: slugify(name),
  },
  isActive: true,
  avatar: {
    _type: 'image',
    asset: {
      _type: 'reference',
      // eslint-disable-next-line no-underscore-dangle
      _ref: uploadedImage._id,
    },
  },
});

export const createReviewDoc = ({
  title, description, productID, userID,
}) => ({
  _type: 'review',
  title,
  description,
  likes: 0,
  dislikes: 0,
  user: {
    _type: 'reference',
    _ref: userID,
  },
  product: {
    _type: 'reference',
    _ref: productID,
  },
});
