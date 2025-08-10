const arr = [3, 3, 3, 7, 7, 10, 10, 10, 15, 15, 15, 15]
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
