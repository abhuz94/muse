import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import banner from './banner'
import cart from './cart'
import newArrival from './newArrival'
import order from './order'
import product from './product'
import user from './user'
import wishlist from './wishlist'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    banner,
    cart,
    newArrival,
    order,
    product,
    user,
    wishlist,
  ]),
})
