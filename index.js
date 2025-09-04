// class Solution {
//   adjs = []

//   ids = []
//   visited = []
//   articulationSet = []

//   id = 0

//   articulationPoints(V, edges) {
//     this.adjs = this._getAdj(edges)

//     this.ids = Array(V).fill(-1)
//     this.visited = Array(V).fill(-1)
//     this.articulationSet = Array(V).fill(false)

//     // console.log(adj)
//     for (let node = 0; node < V; node++) {
//       if (this.visited[node] !== -1) continue
//       this.dfsTarjan(node, -1)
//     }

//     const res = []
//     for (let node = 0; node < V; node++) {
//       if (this.articulationSet[node]) res.push(node)
//     }
//     return res.length ? res : [-1]
//   }

//   dfsTarjan(node, parent) {
//     this.ids[node] = this.id
//     this.visited[node] = this.id
//     this.id++

//     let child = 0
//     for (const neighb of this.adjs[node]) {
//       if (neighb === parent || neighb === node) continue

//       if (this.visited[neighb] === -1) {
//         child++
//         this.dfsTarjan(neighb, node)

//         if (parent !== -1 && this.visited[neighb] >= this.ids[node]) {
//           this.articulationSet[node] = true
//         }
//       }

//       this.visited[node] = Math.min(this.visited[node], this.visited[neighb])
//     }

//     if (parent === -1 && child > 1) this.articulationSet[node] = true
//   }

//   _getAdj(V, edges) {
//     const adj = Array.from({ length: V }, () => [])
//     for (const [u, v] of edges) {
//       adj[u].push(v)
//       adj[v].push(u)
//     }
//     return adj
//   }
// }

// const V = 10
// const edges = [
//   [1, 6],
//   [0, 5],
//   [7, 2],
//   [4, 6],
//   [7, 5],
//   [7, 5],
//   [9, 8],
//   [6, 5],
//   [1, 2],
//   [1, 1],
//   [6, 7],
//   [2, 1],
//   [3, 3],
//   [8, 7],
//   [6, 3]
// ]

// const Sol = new Solution()
// console.log(Sol.articulationPoints(V, edges))
