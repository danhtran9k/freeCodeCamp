const adjsToMatrixUndirected = (V, adjs) => {
    const matrix = Array.from({ length: V }, () => Array(V).fill(0))
    for (let i = 0; i < V; i++) {
        matrix[i][i] = 1
        for (const neighb of adjs[i]) {
            matrix[i][neighb] = 1
        }
    }
    return matrix
}

const edgeDirectedToMatrix = (V, edges) => {
    const matrix = Array.from({ length: V }, () => Array(V).fill(0))
    for (const [from, to] of edges) {
        matrix[from][to] = 1
    }
    return matrix
}

const edgeUndirectedToMatrix = (V, edges) => {
    const matrix = Array.from({ length: V }, () => Array(V).fill(0))
    for (const [from, to] of edges) {
        matrix[from][to] = 1
        matrix[to][from] = 1
    }
    return matrix
}

const matrixToAdjs = (matrix) => {
    const adjs = Array.from({ length: matrix.length }, () => [])
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                adjs[i].push(j)
            }
        }
    }
    return adjs
}

const edgeToAdjs = (V, edges, isUndirected = true) => {
    const adjs = Array.from({ length: V }, () => [])
    for (const [from, to] of edges) {
        adjs[from].push(to)
        if (isUndirected) adjs[to].push(from)
    }
    return adjs
}

export const GraphConverter = {
    adjsToMatrixUndirected,
    edgeDirectedToMatrix,
    edgeUndirectedToMatrix,
    matrixToAdjs,
    edgeToAdjs
}

const debug = [
    [1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0, 0, 1, 1]
]
