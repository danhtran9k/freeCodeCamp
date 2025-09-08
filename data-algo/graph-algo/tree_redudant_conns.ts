function findRedundantDirectedConnection(edges: number[][]): number[] {
    const len = edges.length + 1 // 1-index
    const { adjs, nodeDuoParent } = edgesToAdjCheck(edges, len)

    const { cycle } = tarjan_directed(len, adjs)
    const hasCycle = cycle.size > 0

    for (let ix = edges.length - 1; ix >= 0; ix--) {
        const [from, to] = edges[ix]

        if (!hasCycle) {
            if (nodeDuoParent === to) return [from, to]
        } else {
            const isEdgeInCycle = cycle.has(from) && cycle.has(to)

            if (nodeDuoParent === -1) {
                if (isEdgeInCycle) return [from, to]
            } else {
                if (isEdgeInCycle && nodeDuoParent === to) return [from, to]
            }
        }
    }

    return [-1, -1]
}

function tarjan_directed(V, adj) {
    let id = 0
    const ids = Array(V).fill(-1)
    const low = Array(V).fill(-1)

    const stack = []
    const onStack = Array(V).fill(false)

    let cycle = new Set()

    const entryTrigger = (node) => {
        ids[node] = id
        low[node] = id
        id++

        stack.push(node)
        onStack[node] = true
    }

    function dfs(node) {
        entryTrigger(node)
        const neighbors = adj[node] ?? []

        for (const neighb of neighbors) {
            if (ids[neighb] === -1) {
                dfs(neighb)
                low[node] = Math.min(low[node], low[neighb])
            } else if (onStack[neighb]) {
                low[node] = Math.min(low[node], ids[neighb])
            }
        }

        if (low[node] !== ids[node]) return

        const group = new Set()
        while (stack.length) {
            const nodeStack = stack.pop()
            onStack[nodeStack] = false

            group.add(nodeStack)

            if (nodeStack === node) break
        }

        if (group.size > 1) cycle = group
    }

    for (let node = 1; node < V; node++) {
        if (ids[node] === -1) dfs(node)
    }

    return { cycle, ids }
}

const edgesToAdjCheck = (edges: number[][], len: number) => {
    const adjs: number[][] = Array.from({ length: len }, () => [])
    const parents = Array(len).fill(-1)
    let nodeDuoParent = -1

    for (const [from, to] of edges) {
        adjs[from].push(to)
        if (parents[to] === -1) {
            parents[to] = from
        } else {
            nodeDuoParent = to
        }
    }

    // if (nodeDuoParent !== -1) {
    //     for (let ix = edges.length - 1; ix >= 0; ix--) {
    //         const [from, to] = edges[ix]
    //         if (to === nodeDuoParent) {
    //             targetEdge = [from, to]
    //             break
    //         }
    //     }
    // }
    return { adjs, parents, nodeDuoParent }
}

// const edges = [
//     [1, 2],
//     [1, 3],
//     [2, 3]
// ]

const edges = [
    [2, 3],
    [1, 3],
    [1, 2]
]

// const edges = [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     // [4, 2],
//     [4, 1],
//     [1, 5]
// ]

// const edges = [
//     [3, 1],
//     [1, 5],
//     [5, 2],
//     [3, 4],
//     [4, 6],
//     [1, 4]
// ]

// const edges = [
//     [2, 1],
//     [3, 1],
//     [4, 2],
//     [1, 4]
// ]

export const run_lc_685 = () => {
    console.log(findRedundantDirectedConnection(edges))
}
