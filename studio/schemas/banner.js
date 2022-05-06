export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'tiles',
      title: 'Tiles',
      type: 'array',
      of : [
        {
          type: 'object',
          fields: [
            {
              name: 'seq',
              title: 'Sequence',
              type: 'number',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
            },
            {
              name: 'path',
              title: 'Path (relative)',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }
          ],
        }
      ],
    },
  ],
  preview: {
    select: {
      'tiles': 'tiles',
    },
    prepare(context) {
      const { tiles } = context;

      return {
        title: tiles.map(({ title }) => title).join(', '),
      }
    }
  },
}
