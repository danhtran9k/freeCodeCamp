import { Deque } from '@datastructures-js/deque'

function numSubmat(mat) {
  const row = mat.length
  const col = mat[0].length
  const debug = mat.map((row) => [...row])

  let res = 0

  let prevStack = new Deque() // [col, area, row]
  for (let ir = 0; ir < row; ir++) {
    let mergeCol = -1
    let mergeArea = 0
    let substract = 0
    const nextQueue = new Deque()

    for (let ic = 0; ic < col; ic++) {
      const curr = mat[ir][ic]
      const fullArea = (ir + 1) * (ic + 1)

      if (!curr) {
        nextQueue.pushFront([ic, fullArea, ir])
        substract = fullArea
        mergeArea = fullArea
        mergeCol = ic
        debug[ir][ic] = 0
        console.log('newSubtract from Zero', { substract, mergeCol })
        continue
      }

      // while (prevStack.size() && prevStack.back()[0] < ic) {
      //   console.log(prevStack)
      //   const popStack = prevStack.popBack()
      //   nextQueue.pushFront(popStack)
      // }

      // pop then pushFront - unshift to Queue
      // update new substract with new Queue if existd
      if (prevStack.size() && ic === prevStack.back()[0]) {
        let [prevCol, prevSubtract, prevRow] = prevStack.popBack()

        if (mergeCol >= 0) {
          const subtrackMerge = (prevCol - mergeCol) * (prevRow + 1)
          substract += subtrackMerge
          // substract = mergeArea + subtrackMerge
          console.log({ subtrackMerge, substract, prevCol, mergeCol })
        } else {
          substract = prevSubtract
        }
        nextQueue.pushFront([prevCol, substract, prevRow])
      }

      res += fullArea - substract
      debug[ir][ic] = fullArea - substract
    }

    prevStack = nextQueue
    console.log('nextQueue', nextQueue)
  }

  console.log(debug)
  return res
}

const matrix = [
  [1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 0]
]

const res = numSubmat(matrix)
console.log(res)
