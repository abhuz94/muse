export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'order' }] }],
    },
    {
      name: 'wishlist',
      title: 'Wishlist',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product'}] }],
    },
    {
      name: 'cart',
      title: 'Cart',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product'}] }],
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
    },
  ],
  initialValue: {
    isActive: true,
  },
}
