export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'shipmentDetails',
      title: 'Shipment Details',
      type: 'object',
      fields: [
        {
          name: 'orderedOn',
          title: 'Ordered On',
          type: 'datetime',
          initialValue: new Date().toISOString(),
          validation: Rule => Rule.required(),
        },
        {
          name: 'deliveryOn',
          title: 'Delivery On',
          type: 'datetime',
          validation: Rule => Rule.custom((deliveryOn, context) => {
            if (!deliveryOn) { return 'Delivery On field is required'; }

            return context?.parent?.orderedOn >= context?.parent?.deliveryOn ? 'must be greater than Ordered On date': true;
          }),
        },
      ],
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product'}] }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
  ],
  initialValue: {
    total: 0,
  },
  preview: {
    select: {
      title: 'user.name'
    },
  },
}
