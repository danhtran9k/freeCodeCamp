// https://www.geeksforgeeks.org/problems/articulation-point-1/0
import { adjsToMatrix } from './graph-present-convert'

export class SolutionArticulation {
  articulationPoints(V, edges) {
    // const adjs = this._getAdj(V, edges)
    const adjs = edges
    const set_min = this.ap_min_tarjan(V, adjs)
    const set_full = this.ap_full_tarjan(V, adjs)
    const set_hybrid = this.ap_hybrid(V, adjs)

    const matrix = adjsToMatrix(V, adjs)
    console.log({ set_min, set_full, set_hybrid })

    const points = set_full
    const res = []
    for (let node = 0; node < V; node++) {
      if (points[node]) res.push(node)
    }
    return res.length ? res : [-1]
  }

  ap_min_tarjan(V, adjs) {
    const ids = Array(V).fill(-1)
    const visited = Array(V).fill(-1)
    const articulationSet = Array(V).fill(false)

    let id = 0

    function dfs(node, parent) {
      ids[node] = id
      visited[node] = id
      id++

      let child = 0
      for (const neighb of adjs[node]) {
        if (+neighb === +parent) continue
        if (visited[neighb] === -1) {
          child++
          dfs(+neighb, +node)
          if (parent !== -1 && visited[neighb] >= ids[node]) {
            articulationSet[node] = true
          }
        }
        visited[node] = Math.min(visited[node], visited[neighb])
      }

      if (parent === -1 && child > 1) articulationSet[node] = true
    }

    for (let node = 0; node < V; node++) {
      if (visited[node] !== -1) continue
      dfs(node, -1)
    }

    return articulationSet
  }

  ap_full_tarjan(V, adjs) {
    const ids = Array(V).fill(-1)
    const visited = Array(V).fill(-1)
    const articulationSet = Array(V).fill(false)
    const childs = Array(V).fill(-1)

    let id = 0

    function dfs(node, parent) {
      ids[node] = id
      visited[node] = id
      id++

      let child = 0
      let size = 1

      for (const neighb of adjs[node]) {
        if (+neighb === +parent) continue
        if (visited[neighb] === -1) {
          const childSize = dfs(+neighb, +node)
          size += childSize
          child++

          if (parent !== -1 && visited[neighb] >= ids[node]) {
            articulationSet[node] = true
          }

          visited[node] = Math.min(visited[node], visited[neighb])
        } else {
          visited[node] = Math.min(visited[node], ids[neighb])
        }
      }

      if (parent === -1 && child > 1) articulationSet[node] = true

      childs[node] = size
      return size
    }

    for (let node = 0; node < V; node++) {
      if (visited[node] !== -1) continue
      dfs(node, -1)
    }

    return articulationSet
  }

  ap_hybrid(V, adjs) {
    const visited = Array(V).fill(-1)
    const articulationSet = Array(V).fill(false)

    function dfs(node, parent, depth) {
      visited[node] = depth

      let child = 0
      for (const neighb of adjs[node]) {
        if (+neighb === +parent) continue
        if (visited[neighb] === -1) {
          child++
          dfs(+neighb, +node, depth + 1)

          if (parent !== -1 && visited[neighb] >= visited[node]) {
            articulationSet[node] = true
          }
        }

        visited[node] = Math.min(visited[node], visited[neighb])
      }

      if (parent === -1 && child > 1) articulationSet[node] = true
    }

    for (let node = 0; node < V; node++) {
      if (visited[node] !== -1) continue
      dfs(node, -1, 0)
    }
    return articulationSet
  }

  getAdj(V, edges) {
    const adj = Array.from({ length: V }, () => [])
    for (const [u, v] of edges) {
      adj[u].push(v)
      adj[v].push(u)
    }
    return adj
  }
}

export const tc_articulation = {
  tc160: {
    V: 10,
    adjs: [
      [2], // 0
      [5, 6], // 1
      [0, 9], // 2
      [5, 7], // 3
      [5, 6, 8], // 4
      [1, 3, 4, 6], // 5
      [1, 4, 5, 6, 6, 7, 9], // 6 (có self-loop: 6,6)
      [3, 6], // 7
      [4], // 8
      [2, 6] // 9
    ]
  },
  // swap lại thứ tự để control đường đi dfs
  tc8: {
    V: 8,
    adjs: [
      [1],
      [5, 2, 0],
      [1, 7, 6, 3],
      [4, 5, 2],
      [5, 3],
      [3, 4, 1],
      [2, 7],
      [6, 2]
    ]
  },
  tc8b: {
    V: 8,
    adjs: [
      [1],
      [0, 2, 5],
      [6, 3, 7, 1],
      [4, 5, 2],
      [5, 3],
      [3, 4, 1],
      [2, 7],
      [6, 2]
    ]
  },
  tcBasic: {
    V: 5,
    adjs: [[2, 3], [0], [1], [4]]
  },
  tcBasicUndireced: {
    V: 5,
    adjs: [[1, 2, 3], [0, 2], [0, 1], [0, 4], [3]]
  }
}

export const main_articulation_run = () => {
  const Sol = new SolutionArticulation()
  const { V, adjs } = tc_articulation.tc8b

  console.log(Sol.articulationPoints(V, adjs))
}
