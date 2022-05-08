import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import banner from './banner'
import newArrival from './newArrival'
import order from './order'
import product from './product'
import user from './user'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    banner,
    newArrival,
    order,
    product,
    user,
  ]),
})
