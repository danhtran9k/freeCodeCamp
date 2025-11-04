import fs from 'fs'

export const bisect_tc = [3, 3, 3, 7, 7, 10, 10, 10, 12, 15, 15, 15, 15]
//                        0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12

const saveResultsToFile = (results) => {
    fs.writeFileSync('results.dump.json', JSON.stringify(results, null, 2))
}

/*
-> target = 10 
const arr = [3,...7, 10, 10, 10, 12, ...15]

const idx = [0,...4,  5,  6,  7,  8, ...12]
low    T < 0 | 1...,  5,  _,  _,  8, ...13]
up      -1 | 0...4, _,  _,  7,  _, ...12] < T
max ix = len+1
min ix = -1

❗❗❗❗❗  WARNING ❗❗❗❗❗  
UPPER hay LOWER còn liên quan tới đồng biến hay nghịch biến !!
❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

1. LOWER BOUND MIN IX
 TARGET < | <= MIN ix_num  (LOWER)
[   false -- TARGET --- true ]

1.a T < N -> ix = 8
1.b T <= N -> ix = 5

2. UPPER BOUND MAX IX
(UPPER) MAX ix_num < | <= TARGET 
[   true -- TARGET --- false ]
2.a N < T -> ix = 4
2.b N <= T -> ix = 7

*/

// Nên ưu tiên nhìn bài toán theo hướng LOWER bound - bisect left trước
// default là LOWER_BOUND - 8 (EXCLUDE), 5 (INCLUDE)
export const bisect = (arr, target, isExclude = true) => {
    let [left, right] = [0, arr.length]
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2)

        const cond = isExclude ? target < arr[mid] : target <= arr[mid]

        if (cond) {
            right = mid
        } else {
            // target >= arr[mid] (or >)
            left = mid + 1
        }
    }

    return left
}

// CASE 1.1 lower BOUND EXCLUDE
// (TARGET < MIN ix_num ) 8
const lower_exclude = (arr, target) => bisect(arr, target)

// CASE 1.2 lower BOUND INCLUDE
// (TARGET <= MIN ix_num ) 5
const lower_include = (arr, target) => bisect(arr, target, false)

// CASE 2.2 UPPER BOUND INCLUDE = lower BOUND EXCLUDE - 1
// (MAX ix_num <= TARGET ) 4
const upper_include = (arr, target) => lower_exclude(arr, target) - 1

// CASE 2.1 UPPER BOUND EXCLUDE = lower BOUND INCLUDE - 1
// (MAX ix_num < TARGET ) 7
const upper_exclude = (arr, target) => lower_include(arr, target) - 1

export const debug_bisect = () => {
    // const targets = [10, 11, 1, 20, 3, 15]
    const targets = [10, 11]
    const results = []

    for (const target of targets) {
        const lowerExclude_8 = lower_exclude(bisect_tc, target)
        const lowerInclude_5 = lower_include(bisect_tc, target)
        const upperExclude_4 = upper_exclude(bisect_tc, target)
        const upperInclude_7 = upper_include(bisect_tc, target)
        const resTarget = {
            target,
            lowerExclude_8,
            lowerInclude_5,
            upperExclude_4,
            upperInclude_7
        }
        results.push(resTarget)
        console.log(resTarget)
        console.log('========================================')
    }

    saveResultsToFile(results)
}

/*
Case max Index lower Bound 
Biên max + 1 khi -1 sẽ về lastIndex thực
Biên -1 do 0 - 1
*/
