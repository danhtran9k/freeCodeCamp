export function travel_order_with_level(node) {
  let level = 0
  const queue = [node]
  let count = queue.length
  let hash = {}

  while (queue.length > 0) {
    const curr = queue.shift()
    if (!hash[level]) {
      hash[level] = [curr.data]
    } else {
      hash[level].push(curr.data)
    }
    count--

    if (curr.left !== null) queue.push(curr.left)
    if (curr.right !== null) queue.push(curr.right)

    if (count === 0) {
      count = queue.length
      level++
    }
  }

  return hash
}
