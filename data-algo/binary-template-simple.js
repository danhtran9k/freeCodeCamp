import fs from 'fs'

const arr = [3, 3, 3, 7, 7, 10, 10, 10, 12, 15, 15, 15, 15]
//           0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12

const saveResultsToFile = (results) => {
  fs.writeFileSync('results.dump.json', JSON.stringify(results, null, 2))
}

/*
-> target = 10 
const arr = [3,...7, 10, 10, 10, 12, ...15]

const idx = [0,...4,  5,  6,  7,  8, ...12]
low    T < 0 | 1...,  5,  _,  _,  8, ...13]
upp      -1 | 0...4, _,  _,  7,  _, ...12] < T
max ix = len+1
min ix = -1

1. UPPER BOUND MIN IX
 TARGET < | <= MIN ix_num  (UPPER)
[   false -- TARGET --- true ]

1.a T < N -> ix = 8
1.b T <= N -> ix = 5

2. LOWER BOUND MAX IX
(LOWER) MAX ix_num < | <= TARGET 
[   true -- TARGET --- false ]
2.a N < T -> ix = 4
2.b N <= T -> ix = 7

*/

// Nên ưu tiên nhìn bài toán theo hướng upper bound - bisect left trước
const bisect = (arr, target, isExclude = true) => {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)

    // default là UPPER_BOUND_EXCLUDE
    const cond = isExclude ? target < arr[mid] : target <= arr[mid]

    if (cond) {
      // target < arr[mid]  (or <=)
      right = mid
    } else {
      // target >= arr[mid] (or >)
      left = mid + 1
    }
  }

  return left
}

// CASE 1.1 UPPER BOUND EXCLUDE
// (TARGET < MIN ix_num ) 8
const upper_exclude = (arr, target) => bisect(arr, target)

// CASE 1.2 UPPER BOUND INCLUDE
// (TARGET <= MIN ix_num ) 5
const upper_include = (arr, target) => bisect(arr, target, false)

// CASE 2.2 LOWER BOUND INCLUDE = UPPER BOUND EXCLUDE - 1
// (MAX ix_num <= TARGET ) 4
const lower_include = (arr, target) => upper_exclude(arr, target) - 1

// CASE 2.1 LOWER BOUND EXCLUDE = UPPER BOUND INCLUDE - 1
// (MAX ix_num < TARGET ) 7
const lower_exclude = (arr, target) => upper_include(arr, target) - 1

const debug = () => {
  // const targets = [10, 11, 1, 20, 3, 15]
  const targets = [10, 11]
  const results = []

  for (const target of targets) {
    const upperExclude_8 = upper_exclude(arr, target)
    const upperInclude_5 = upper_include(arr, target)
    const lowerExclude_4 = lower_exclude(arr, target)
    const lowerInclude_7 = lower_include(arr, target)
    const resTarget = {
      target,
      upperExclude_8,
      upperInclude_5,
      lowerExclude_4,
      lowerInclude_7
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
