export const adjsToMatrixUndirected = (V, adjs) => {
  const matrix = Array.from({ length: V }, () => Array(V).fill(0))
  for (let i = 0; i < V; i++) {
    matrix[i][i] = 1
    for (const neighb of adjs[i]) {
      matrix[i][neighb] = 1
    }
  }
  return matrix
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
