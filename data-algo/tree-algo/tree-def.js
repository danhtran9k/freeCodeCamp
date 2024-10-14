export class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export function genTree() {
  let root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)

  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)

  root.right.right = new TreeNode(6)

  root.right.right.left = new TreeNode(7)
  return root
}

//   const root2 = genTreeFromCustomArr([
//   [null, 1],
//   [2, 3],
//   [4, 5, null, 6],
//   [null, null, null, null, null, 7],
//   [null, null]
// ])
export function genTreeFromCustomArr(arr) {
  if (!arr.length) return null

  const headArr = arr.shift()
  if (headArr.length !== 2 || headArr[0])
    throw Error('head should have only 1 element')

  const root = new TreeNode(headArr[1])
  let queue = [root]
  let height = 1
  let stop = false

  while (queue.length && !stop) {
    stop = true

    let child = arr.shift()
    let len = queue.length

    if (child.length !== 2 * len) {
      console.log({ child, len, queue })
      throw Error('invalid arr tree')
    }

    for (let i = 0; i < len; i++) {
      let currNode = queue.shift()

      let left = child.shift()
      let right = child.shift()
      if (left || right) stop = false

      if (left) {
        currNode.left = new TreeNode(left)
        queue.push(currNode.left)
      }
      if (right) {
        currNode.right = new TreeNode(right)
        queue.push(currNode.right)
      }
    }

    height++
  }

  return root
}

export const getHeightFromBfs = (arr) => {
  let len = arr.length
  if (!len) return 0

  let height = 0
  let sum = 0
  while (sum < len) {
    sum += Math.pow(2, height)
    height++
  }

  return [height, sum === len]
}

export const bfsArr2Tree = (arr) => {
  if (!arr.length) return null

  const curr = arr.shift()
  const head = new TreeNode(curr)
  const queue = [head]

  let isContinue = true

  while (queue.length && isContinue) {
    isContinue = false
    let maxLen = queue.length

    for (let i = 0; i < maxLen && arr.length; i++) {
      const currNode = queue.shift()
      const left = arr.shift()
      if (left !== undefined && left !== null) {
        currNode.left = new TreeNode(left)
        queue.push(currNode.left)
        isContinue = true
      }
      const right = arr.shift()
      if (right !== undefined && right !== null) {
        currNode.right = new TreeNode(right)
        queue.push(currNode.right)
        isContinue = true
      }

      if (left === undefined || right === undefined) break
    }
  }

  return head
}

export const deserializeTree = (data = '') => {
  if (!data) return null
  const arr = data.split(',')
  return bfsArr2Tree(arr)
}
