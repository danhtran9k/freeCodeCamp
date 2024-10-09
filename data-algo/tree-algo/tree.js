import { genTree } from './tree-def.js'
import { travel_NLR, travel_order } from './tree-traverse.js'

const main = () => {
  const root = genTree()

  // console.log('travel_NLR(root)', travel_NLR(root))

  console.log('travel_order(root)', travel_order(root))
}

export { main }
