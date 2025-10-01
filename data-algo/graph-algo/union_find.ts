function uDS_arr(nodes: number) {
    const parents = Array.from({ length: nodes }, (_, i) => i)
    // const size = Array(nodes).fill(1)

    function find(node: number) {
        const parent = parents[node]
        if (parent === node) return node

        parents[node] = find(parent)
        return parents[node]
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
            parents[parent_nb] = parent_na
        } else {
            parents[parent_na] = parent_nb
        }
        return true
    }

    return { parents, find, uf }
}

function uDS_Map(nodes: number) {
    const parents = new Map()
    for (let node = 0; node < nodes; node++) {
        parents.set(node, node)
    }

    function find(node: number) {
        const parent = parents.get(node)
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

export const Union = {
    uDS_arr,
    uDS_Map
}
