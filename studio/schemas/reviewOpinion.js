export default {
  name: 'reviewOpinion',
  title: 'Review Opinion',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'review',
      title: 'Review',
      type: 'reference',
      to: { type: 'review' },
    },
    {
      name: 'opinion',
      title: 'Opinion',
      type: 'boolean',
    }
  ],
}
