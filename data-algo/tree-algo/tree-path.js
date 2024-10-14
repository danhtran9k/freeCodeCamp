export const findPath = (node, target) => {
  let isFound = false
  let path = []

  function travel_LRN(node, target, currentPath = []) {
    if (node === null || isFound) return

    if (!isFound) {
      currentPath.push(node.data)

      if (node.data === target) {
        isFound = true
        path = currentPath
      }
    }

    travel_LRN(node.left, target, [...currentPath])
    travel_LRN(node.right, target, [...currentPath])
  }

  travel_LRN(node, target, [])
  return path
}

// backtracking concept

export const findPathBacktrack = (node, target) => {
  let isFound = false
  let path = []

  function travel_NLR_backtrack(node, target, currentPath = []) {
    if (node === null || isFound) return

    currentPath.push(node.data)

    if (node.data === target) {
      isFound = true
      path = [...currentPath]
      return
    }

    travel_NLR_backtrack(node.left, target, currentPath)
    travel_NLR_backtrack(node.right, target, currentPath)

    // backtrack if not found
    currentPath.pop()
  }

  travel_NLR_backtrack(node, target, [])
  return path
}
