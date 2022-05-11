export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'reviewOpinions',
      title: 'Review Opinions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'reviewOpinion' }] }],
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: { type: 'product' },
    },
  ],
  initialValue: {
    likes: 0,
    dislikes: 0,
  }
};
