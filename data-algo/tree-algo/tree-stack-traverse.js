export function tree_NLR_stack_traverse(root) {
  if (root === null) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()

    // Visit the node (N)
    result.push(current.value)

    // LNR -> stack NRL
    if (current.right) {
      stack.push(current.right) // Right child (R)
    }
    if (current.left) {
      stack.push(current.left) // Left child (L)
    }
  }

  return result
}
