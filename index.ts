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
lc()
