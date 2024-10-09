export const travel_NLR = (node, result = []) => {
  if (node === null) return
  result.push(node.data)
  travel_NLR(node.left, result)
  travel_NLR(node.right, result)

  return result
}

export function travel_LNR(node, result = []) {
  if (node === null) return
  travel_LNR(node.left, result)
  result.push(node.data)
  travel_LNR(node.right, result)

  return result
}

export function travel_LRN(node, result = []) {
  if (node === null) return
  travel_LRN(node.left, result)
  travel_LRN(node.right, result)
  result.push(node.data)

  return result
}

export function travel_order(node) {
  const result = []
  const queue = [node]

  while (queue.length > 0) {
    const curr = queue.shift()
    result.push(curr.data)
    if (curr.left !== null) queue.push(curr.left)
    if (curr.right !== null) queue.push(curr.right)
  }
  return result
}
