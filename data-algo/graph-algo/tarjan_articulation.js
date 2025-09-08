// https://www.geeksforgeeks.org/problems/articulation-point-1/0
import { tc_articulation } from '../testcase/gen-tc-tarjan'
import { adjsToMatrixUndirected } from '../testcase/graph-converter'

export class SolutionArticulation {
    articulationPoints(V, edges) {
        // const adjs = this._getAdj(V, edges)
        const adjs = edges
        const set_min = this.ap_min_tarjan(V, adjs)
        const set_full = this.ap_full_tarjan(V, adjs)
        const set_hybrid = this.ap_hybrid(V, adjs)

        const matrix = adjsToMatrixUndirected(V, adjs)
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

export const main_articulation_run = () => {
    const Sol = new SolutionArticulation()
    const { V, adjs } = tc_articulation.tc8b

    console.log(Sol.articulationPoints(V, adjs))
}
