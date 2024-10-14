import { genTree, genTreeFromCustomArr } from './tree-def.js'
import { travel_NLR, travel_order } from './tree-traverse.js'

const main = () => {
  const root = genTree()

  // console.log('travel_NLR(root)', travel_NLR(root))

  console.log('travel_order(root)', travel_order(root))
  const root2 = genTreeFromCustomArr([
    [null, 1],
    [2, 3],
    [4, 5, null, 6],
    [null, null, null, null, null, 7],
    [null, null]
  ])
  const normalRoot = JSON.stringify(travel_order(root))
  const myRootConvert = JSON.stringify(travel_order(root2))
  console.log(myRootConvert === normalRoot, myRootConvert)
}

export { main }
