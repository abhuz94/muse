import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import banner from './banner'
import brand from './brand'
import category from './category'
import newArrival from './newArrival'
import order from './order'
import product from './product'
import review from './review'
import reviewOpinion from './reviewOpinion'
import user from './user'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    banner,
    brand,
    category,
    newArrival,
    order,
    product,
    review,
    reviewOpinion,
    user,
  ]),
})
