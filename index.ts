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
    const { adjs, queueBfs: queue, inDegree } = setup(n + IX_OFFSET, relations)
    // constrain no cycle -> skip check

    let count = 0
    while (queue.size()) {
        count++
        const maxTake = Math.min(k, queue.size())

        for (let i = 1; i <= maxTake; i++) {
            const relation = queue.popFront()
            const followUps = adjs[relation]
            for (const course of followUps) {
                inDegree[course]--
                if (!inDegree[course]) queue.pushBack(course)
            }
        }
    }

    return count
}

const setup = (n: number, relations: number[][]) => {
    const adjs = Array.from({ length: n }, () => [])
    const inDegree = new Array(n).fill(0)

    for (const [from, to] of relations) {
        adjs[from].push(to)
        inDegree[to]++
    }

    const queueBfs = new Deque<number>()
    for (let course = IX_OFFSET; course < n; course++) {
        if (inDegree[course] === 0) queueBfs.pushBack(course)
    }

    return { adjs, queueBfs, inDegree }
}

function debug() {
    const { n, relations, k } = tc[0]
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
    }
]

debug()
