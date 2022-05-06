import slugify from './slugify';

// eslint-disable-next-line import/prefer-default-export
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
