import { TreeNode } from './tree-def.js'

export function treeHardCode1() {
  // Create the root node
  let root = new TreeNode(4)

  // Level 2
  root.left = new TreeNode(-7)
  root.right = new TreeNode(-3)

  // Level 3
  root.right.left = new TreeNode(-9)
  root.right.right = new TreeNode(-3)

  // Level 4 (for -9 subtree)
  root.right.left.left = new TreeNode(9)
  root.right.left.right = new TreeNode(-7)
  // Level 4 (for -3 subtree)
  root.right.right.left = new TreeNode(-4)

  // Level 5 (for 9 subtree)
  root.right.left.left.left = new TreeNode(6)
  // Level 5 (for -7 subtree)
  root.right.left.right.left = new TreeNode(-6)
  root.right.left.right.right = new TreeNode(-6)

  // Level 6 (for 6 subtree)
  root.right.left.left.left.left = new TreeNode(0)
  root.right.left.left.left.right = new TreeNode(6)
  // Level 6 (for rightmost -6 subtree)
  root.right.left.right.left.left = new TreeNode(5)
  root.right.left.right.right.left = new TreeNode(9)

  // Level 7 (for left -6 subtree)
  root.right.left.left.left.left.right = new TreeNode(-1)
  root.right.left.left.left.right.left = new TreeNode(-4)
  root.right.left.right.right.left.left = new TreeNode(-2)

  return root
}

export const arrHardCode1 = [
  4,
  -7,
  -3,
  null,
  null,
  -9,
  -2,
  9,
  -7,
  -4,
  null,
  6,
  null,
  -1,
  -6,
  // 2 null for -4
  null,
  null,
  // 2 null for -4
  0,
  8,
  5,
  null,
  10,
  null,
  null,
  -7,
  -8,
  null,
  null,
  null,
  -10
]

export const arrHardCode2 = [0, 0, 0, 0, null, null, 1, null, null, null, 2]
export function treeHardCode2() {
  let root = new TreeNode(0)

  root.left = new TreeNode(0)
  root.right = new TreeNode(0)

  root.left.left = new TreeNode(0)
  root.right.right = new TreeNode(1)

  root.right.right.right = new TreeNode(2)
}
