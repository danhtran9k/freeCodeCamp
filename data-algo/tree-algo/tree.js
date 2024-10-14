import {
  bfsArr2Tree,
  deserializeTree,
  genTree,
  genTreeFromCustomArr
} from './tree-def.js'
import {
  arrHardCode1,
  arrHardCode2,
  treeHardCode1,
  treeHardCode2
} from './tree-hard-code-test.js'
import { findPath } from './tree-path.js'
import {
  serializeBFSTree,
  travel_LRN,
  travel_NLR,
  travel_order
} from './tree-traverse.js'

const main = () => {
  const root3 = bfsArr2Tree(arrHardCode1)
  const tmp = findPath(root3, -8)
  console.log({ tmp })
}

export { main }
