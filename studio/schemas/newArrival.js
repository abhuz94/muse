export default {
  name: 'newArrival',
  title: 'New Arrival',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Products',
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
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
            },
          ],
        }
      ],
    },
  ],
  preview: {
    select: {
      productName: 'products.0.product.name',
      productImage: 'products.0.product.images.0',
    },
    prepare(context) {
      const { productName, productImage } = context;

      return {
        title: productName,
        media: productImage,
      }
    }
  },
}
