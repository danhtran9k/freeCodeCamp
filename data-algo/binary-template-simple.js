const arr = [3, 3, 3, 7, 7, 10, 10, 10, 12, 15, 15, 15, 15]
//           0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11
const test = [2, 3, 10, 12, 15, 20]
// expect is [lower, upper] of test in relative to arr
const expect = [
  [-1, 0],
  [0, 2],
  [5, 7],
  [7, 8],
  [8, 11],
  [11, -1]
]

/*
-> target = 10 

# Case 1
max index num < target = 4

# Case 2
max index num <= target = 7

# Case 3
min index num > target = 8
target = 16 -> index = 12
target = 2 -> index = -1

# Case 4
min index num >= target = 5

*/

//
/*
CASE 3 : min index num > target
Target = 10 -> index = 8
target = 16 -> index = 12
target = 2 -> index = -1
*/
const min_index_greater_than_target = (arr, target) => {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    const cond = arr[mid] > target
    if (cond) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

const max_index_less_than_target = (arr, target) => {
  let [left, right] = [0, arr.length]
  console.log({ target })
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    const cond = arr[mid] >= target
    console.log({ cond, mid, left, right, nMid: arr[mid] })
    if (cond) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

const debug = () => {
  // const targets = [1, 3, 10, 12, 15, 20]
  const targets = [10]
  for (const target of targets) {
    // const minIndexGreaterThanTarget = min_index_greater_than_target(arr, target)
    // console.log({ target, minIndexGreaterThanTarget })
    const maxIndexLessThanTarget = max_index_less_than_target(arr, target)
    console.log({ target, maxIndexLessThanTarget })
  }
}

debug()
