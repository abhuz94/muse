export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
      },
    },
    {
      name: 'path',
      title: 'Path (relative)',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    {
      name: 'discount',
      title: 'Discount (%)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'review'}] }],
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
  ],
  initialValue: {
    price: 0,
    discount: 0,
    ratings: 0.0,
    rating: 0.0,
  },
};
