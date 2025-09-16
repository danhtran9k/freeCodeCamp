import { daily_lc } from './daily'
import { Deque } from './node_modules/@datastructures-js/deque/index'
daily_lc()

// ================================================
const IX_OFFSET = 1
function minNumberOfSemesters(
    n: number,
    relations: number[][],
    k: number
): number {
    const { initMask, getQueueMask } = setup(n, relations)
    const dp = { 0: 0 } // baseCase : stateMask = 0 -> dp = 0

    const dfs = (maskState: number) => {
        if (dp[maskState] !== undefined) return dp[maskState]

        const maskCanLearn = getQueueMask(maskState, true)
        const countCanLearn = countBits(maskCanLearn)

        if (countCanLearn <= k) {
            // k cover all current course can learn
            // learned mean bit is off
            const learnAllState = maskState ^ maskCanLearn
            dp[maskState] = 1 + dfs(learnAllState)
            return dp[maskState]
        }

        // for subMask, enum normally by formula
        // but use XOR to patch 0 for learned state
        // Always try greedy enqueue FULLY k
        // cause we cannot more than k, and smaller case is covered above
        dp[maskState] = Infinity

        let subMaskLearn = maskCanLearn
        while (subMaskLearn) {
            const nextState = maskState ^ subMaskLearn
            if (countBits(nextState) === k) {
                dp[maskState] = Math.min(dp[maskState], dfs(nextState) + 1)
            }
            subMaskLearn = (subMaskLearn - 1) & maskCanLearn
            // https://cp-algorithms.com/algebra/all-submasks.html
        }

        return dp[maskState]
    }

    return dfs(initMask)
}

const countBits = (n) => {
    let count = 0
    while (n) {
        n &= n - 1 // Clear the least significant bit
        count++
    }
    return count
}

const setup = (n: number, relations: number[][]) => {
    const totalState = 1 << n
    const initMask = totalState - 1
    // toggle all bit, 1 mean not learn !!

    const maskRequired = Array(n).fill(0)
    for (const [from, to] of relations) {
        maskRequired[to - IX_OFFSET] |= 1 << (from - IX_OFFSET)
    }

    // course degree 0 => maskRequered = 0 !!
    const getQueueMask = (maskState: number, isReverse = false) => {
        let maskQueueCanLearn = 0
        maskState = isReverse ? maskState ^ initMask : maskState

        for (let course = 0; course < n; course++) {
            const hasLearned = maskState & (1 << course)
            if (hasLearned) continue

            const courseRequirements = maskRequired[course]
            const canLearn =
                (courseRequirements & maskState) === courseRequirements

            if (canLearn) maskQueueCanLearn |= 1 << course
        }
        return maskQueueCanLearn
    }

    return { totalState, getQueueMask, initMask }
}

const debug = () => {
    const { n, relations, k } = tc[2]
    const res = minNumberOfSemesters(n, relations, k)
    console.log(res)
}

var tc = [
    {
        n: 13,
        k: 9, // expected 3
        relations: [
            [12, 8],
            [2, 4],
            [3, 7],
            [6, 8],
            [11, 8],
            [9, 4],
            [9, 7],
            [12, 4],
            [11, 4],
            [6, 4],
            [1, 4],
            [10, 7],
            [10, 4],
            [1, 7],
            [1, 8],
            [2, 7],
            [8, 4],
            [10, 8],
            [12, 7],
            [5, 4],
            [3, 4],
            [11, 7],
            [7, 4],
            [13, 4],
            [9, 8],
            [13, 8]
        ]
    },
    {
        n: 4,
        relations: [
            [2, 1],
            [3, 1],
            [1, 4]
        ],
        k: 2
    },
    {
        n: 5,
        relations: [
            [2, 1],
            [3, 1],
            [4, 1],
            [1, 5]
        ],
        k: 2
    },
    {
        n: 11,
        relations: [
            [2, 6],
            [2, 9],
            [2, 8],
            [2, 10],
            [2, 3],
            [2, 7],
            [2, 0],
            [6, 1],
            [6, 8],
            [6, 4],
            [6, 3],
            [6, 0],
            [9, 8],
            [9, 3],
            [9, 7],
            [9, 0],
            [1, 4],
            [1, 3],
            [1, 7],
            [8, 10],
            [8, 5],
            [8, 3],
            [4, 3],
            [4, 7],
            [10, 5],
            [10, 3],
            [10, 7],
            [10, 0],
            [3, 7],
            [3, 0],
            [7, 0]
        ],
        k: 2
    },
    {
        n: 7,
        relations: [
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 4],
            [5, 4],
            [6, 5]
        ],
        k: 100
    }
]

debug()
