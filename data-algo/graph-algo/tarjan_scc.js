import { tc_articulation } from './tarjan_articulation'

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[][]}
 */
export class SolutionTarjanScc {
  // Function to return a list of lists of integers denoting the members
  // of strongly connected components in the given graph.
  tarjans(V, adj) {
    return this.dfs_tarjan(V, adj)
  }

  dfs_tarjan_full(V, adj) {
    const ids = Array(V).fill(-1)
    const low = Array(V).fill(-1)

    const onStack = Array(V).fill(false)
    const stack = []

    const result = []

    let id = 0
    let sccCount = 0

    const entryTrigger = (node) => {
      ids[node] = id
      low[node] = id
      id++

      stack.push(node)
      onStack[node] = true
    }

    const popStack = (idNode, group) => {
      const nodeStack = stack.pop()
      onStack[nodeStack] = false
      low[nodeStack] = idNode

      group.push(nodeStack)

      return nodeStack
    }

    function dfs(node) {
      entryTrigger(node)
      const neighbors = adj[node] ?? []

      for (const neighb of neighbors) {
        if (ids[neighb] === -1) dfs(neighb)
        if (onStack[neighb]) low[node] = Math.min(low[node], low[neighb])

        const idNode = ids[node]
        if (low[node] !== idNode) continue

        const group = []
        while (stack.length) {
          const nodeStack = popStack(idNode, group)
          if (nodeStack === node) break
        }

        if (group.length) {
          result.push(group.sort((a, b) => a - b))
          sccCount++
        }
      }
    }

    for (let node = 0; node < V; node++) {
      if (ids[node] === -1) dfs(node)
    }

    return result
  }

  dfs_tarjan(V, adj) {
    const ids = Array(V).fill(-1)
    const low = Array(V).fill(-1)

    const onStack = Array(V).fill(false)
    const stack = []

    const result = []

    let id = 0
    let sccCount = 0

    function dfs(node) {
      ids[node] = id
      low[node] = id
      id++

      stack.push(node)
      onStack[node] = true

      const neighbors = adj[node] ?? []

      for (const neighb of neighbors) {
        if (ids[neighb] === -1) {
          dfs(neighb)
          low[node] = Math.min(low[node], low[neighb])
        } else if (onStack[neighb]) {
          low[node] = Math.min(low[node], ids[neighb])
        }
      }

      let nodeFromStack = -1
      if (low[node] === ids[node]) {
        const group = []

        while (nodeFromStack !== node) {
          nodeFromStack = stack.pop()
          onStack[nodeFromStack] = false
          // low[nodeFromStack] = ids[node]

          group.push(nodeFromStack)

          // if (nodeFromStack === node) break
        }

        result.push(group.sort((a, b) => a - b))
        sccCount++
      }
    }

    for (let node = 0; node < V; node++) {
      if (ids[node] === -1) dfs(node)
    }

    return result
  }
}

export const main_scc_run = () => {
  const Sol = new SolutionTarjanScc()
  const { V, adjs } = tc_articulation.tcBasicUndireced

  console.log(Sol.tarjans(V, adjs))
}
