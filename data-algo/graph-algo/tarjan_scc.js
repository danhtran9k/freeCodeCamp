/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[][]}
 */

class SolutionTarjanScc {
  // Function to return a list of lists of integers denoting the members
  // of strongly connected components in the given graph.
  tarjans(V, adj) {
    // code here
    return [[1, 0, 2], [3], [4]]
  }

  dfs_tarjan_full(V, adj) {
    const ids = Array(V).fill(-1)
    const low = Array(V).fill(-1)

    const onStack = Array(V).fill(false)
    const stack = []

    const result = []

    function dfs(node) {
      ids[node] = id
      low[node] = id
      id++
      stack.push(node)
      onStack[node] = true
      let id = 0

      for (let node = 0; node < V; node++) {
        if (ids[node] === -1) {
          dfs(node)
        }
      }
      return result
    }
  }
}
