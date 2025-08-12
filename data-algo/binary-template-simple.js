import fs from 'fs'

const arr = [3, 3, 3, 7, 7, 10, 10, 10, 12, 15, 15, 15, 15]
//           0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12
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

// write an function save results to file
const saveResultsToFile = (results) => {
  fs.writeFileSync('results.dump.json', JSON.stringify(results, null, 2))
}

/*
-> target = 10 
const arr = [3,...7, 10, 10, 10, 12, ...15]
const idx = [0,...4,  5,  6,  7,  8, ...12]

(target < max ix num  = lastIx !! -> ĐN sai)
1. UPPER BOUND ( TARGET < | <= MIN ix_num) 
1.1 EXCLUDE T < N -> ix = 8
1.2 INCLUDE T <= N -> ix = 7

target = 2 -> index = 0
target = 16 -> index = 13

2. LOWER BOUND ( MAX ix_num < | <= TARGET )
2.1 EXCLUDE T > N -> ix = 4
2.2 INCLUDE T >= N -> ix = 5
*/

const init = () => [0, arr.length]
const midIx = (left, right) => Math.floor(left + (right - left) / 2)

// CASE 1.1 UPPER BOUND EXCLUDE (max Index num < target)
const upper_exclude = (arr, target) => {
  let [left, right] = init()
  while (left < right) {
    const mid = midIx(left, right)
    const cond = arr[mid] > target
    if (cond) {
      // target < arr[mid]
      right = mid
    } else {
      // arr[mid] <= target
      left = mid + 1
    }
  }
  return left
}

// CASE 1.2 UPPER BOUND INCLUDE (max Index num <= target)
const upper_include = (arr, target) => {
  let [left, right] = init()
  // console.log({ target })
  while (left < right) {
    const mid = midIx(left, right)
    const cond = arr[mid] >= target

    if (cond) {
      // target <= arr[mid]
      right = mid
    } else {
      // arr[mid] < target
      left = mid + 1
    }
  }

  return left
}

// CASE 2.1 LOWER BOUND EXCLUDE (Max idx 4 < TARGET = 10 )
// CASE 2.2 LOWER BOUND INCLUDE (Max idx 5 <= TARGET = 10 )
const lower_exclude = (arr, target) => upper_include(arr, target) - 1
const lower_include = (arr, target) => upper_exclude(arr, target) - 1

const debug = () => {
  const targets = [1, 3, 4, 10, 11, 12, 15, 20]
  // const targets = [10]
  const results = []

  for (const target of targets) {
    const upperExclude = upper_exclude(arr, target)
    const upperInclude = upper_include(arr, target)
    const lowerExclude = lower_exclude(arr, target)
    const lowerInclude = lower_include(arr, target)
    const resTarget = {
      target,
      upperExclude,
      upperInclude,
      lowerExclude,
      lowerInclude
    }
    results.push(resTarget)
    console.log(resTarget)
    console.log('========================================')
  }

  saveResultsToFile(results)
}

debug()

/*
Case max Index lower Bound 
Biên max + 1 khi -1 sẽ về lastIndex thực
Biên -1 do 0 - 1
*/
