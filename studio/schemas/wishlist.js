export default {
  name: 'wishlist',
  title: 'Wishlist',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
      validation: Rule => Rule.required(),
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product'}] }],
    },
  ],
  preview: {
    select: {
      title: 'user.name'
    },
  },
};
