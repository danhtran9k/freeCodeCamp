function findCriticalAndPseudoCriticalEdges(
    n: number,
    edges: number[][]
): number[][] {
    const sortedEdges = edges
        .map(([from, to, weight], ix) => [from, to, weight, ix++])
        .sort((a, b) => a[2] - b[2])

    const res = []
    const union = uDS_Map(n)

    let minWeight = Infinity
    for (const [from, to, weight] of sortedEdges) {
        if (union.uf(from, to, false)) {
            res.push([from, to])
            minWeight = weight
        }
    }
    console.log(sortedEdges)
    return res
}

function uDS_Map(nodes: number) {
    const parents = new Map()
    for (let node = 0; node < nodes; node++) {
        parents.set(node, node)
    }

    function find(node: number) {
        let parent = parents.get(node)
        if (parent === node) return node

        parents.set(node, find(parent))
        return parents.get(node)
    }

    function isRankN1(n1, n2) {
        return n1 <= n2
    }

    function uf(na, nb, isExec = true) {
        const parent_na = find(na)
        const parent_nb = find(nb)

        if (parent_na === parent_nb) return false
        if (!isExec) return true

        if (isRankN1(parent_na, parent_nb)) {
            parents.set(parent_nb, parent_na)
        } else {
            parents.set(parent_na, parent_nb)
        }
        return true
    }

    return { parents, find, uf }
}

// ================================================
// EXECUTE

const lc = () => {
    const n = 5
    const edges = [
        [0, 1, 1],
        [1, 2, 1],
        [2, 3, 2],
        [0, 3, 2],
        [0, 4, 3],
        [3, 4, 3],
        [1, 4, 6]
    ]

    const res = findCriticalAndPseudoCriticalEdges(n, edges)
    console.log(res)
}
// lc()

const tc_daily = {
    1: {
        n: 2,
        languages: [[1], [2], [1, 2]],
        friendships: [
            [1, 2],
            [1, 3],
            [2, 3]
        ]
    },
    2: {
        n: 3,
        languages: [[2], [1], [1, 2], [3]],
        friendships: [
            [1, 4],
            [1, 2],
            [3, 4],
            [2, 3]
        ]
    },
    5: {
        n: 11,
        languages: [
            [3, 11, 5, 10, 1, 4, 9, 7, 2, 8, 6],
            [5, 10, 6, 4, 8, 7],
            [6, 11, 7, 9],
            [11, 10, 4],
            [6, 2, 8, 4, 3],
            [9, 2, 8, 4, 6, 1, 5, 7, 3, 10],
            [7, 5, 11, 1, 3, 4],
            [3, 4, 11, 10, 6, 2, 1, 7, 5, 8, 9],
            [8, 6, 10, 2, 3, 1, 11, 5],
            [5, 11, 6, 4, 2]
        ],
        friendships: [
            [7, 9],
            [3, 7],
            [3, 4],
            [2, 9],
            [1, 8],
            [5, 9],
            [8, 9],
            [6, 9],
            [3, 5],
            [4, 5],
            [4, 9],
            [3, 6],
            [1, 7],
            [1, 3],
            [2, 8],
            [2, 6],
            [5, 7],
            [4, 6],
            [5, 8],
            [5, 6],
            [2, 7],
            [4, 8],
            [3, 8],
            [6, 8],
            [2, 5],
            [1, 4],
            [1, 9],
            [1, 6],
            [6, 7]
        ]
    }
}
function minimumTeachings(
    n: number,
    languages: number[][],
    friendships: number[][]
): number {
    let res = 0
    const { langCount, langCountSorted, totalFriends, friendAdjs, totalLang } =
        setup(n, languages, friendships)
    let langChoose = langCountSorted[0]
    return totalFriends - langCount[langChoose].length
}

const setup = (n, languages, friendships) => {
    const totalPeople = languages.length
    const langCount = {}
    let totalLang = 0

    for (let friend = 1; friend <= totalPeople; friend++) {
        const ix = friend - 1
        const knowns = languages[ix]
        for (const lang of knowns) {
            if (langCount[lang] === undefined) {
                langCount[lang] = []
                totalLang++
            }
            langCount[lang].push(friend)
        }
    }
    const langCountSorted = Object.keys(langCount).sort(
        (a, b) => langCount[b].length - langCount[a].length
    )

    const friendAdjs = {}
    for (const [from, to] of friendships) {
        if (friendAdjs[from] === undefined) friendAdjs[from] = []
        if (friendAdjs[to] === undefined) friendAdjs[to] = []
        friendAdjs[from].push(to)
        friendAdjs[to].push(from)
    }
    const totalFriends = Object.keys(friendAdjs).length
    return { langCount, langCountSorted, totalFriends, friendAdjs, totalLang }
}

const daily = () => {
    const { n, languages, friendships } = tc_daily[5]
    const res = minimumTeachings(n, languages, friendships)
    console.log(res)
}
daily()
