import { tc_articulation, tc_edge } from '../testcase/gen-tc-tarjan'
import { GraphConverter } from '../testcase/graph-converter'

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[][]}
 */
export class SolutionTarjanScc {
    // Function to return a list of lists of integers denoting the members
    // of strongly connected components in the given graph.
    tarjans(V, adj) {
        return this.dfs_tarjan_undirected(V, adj)
    }

    dfs_tarjan_undirected(V, adj) {
        let id = 0
        const ids = Array(V).fill(-1)
        const low = Array(V).fill(-1)

        const onStack = Array(V).fill(false)
        const stack = []

        let sccCount = 0
        const result = []

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

        function dfs(node, parent) {
            entryTrigger(node)
            const neighbors = adj[node] ?? []

            for (const neighb of neighbors) {
                if (neighb === parent) continue
                if (ids[neighb] === -1) {
                    dfs(neighb, node)
                    low[node] = Math.min(low[node], low[neighb])
                } else if (onStack[neighb]) {
                    low[node] = Math.min(low[node], ids[neighb])
                }
            }

            const idNode = ids[node]
            if (low[node] !== idNode) return

            const group = []
            while (stack.length) {
                const nodeStack = popStack(idNode, group)
                if (nodeStack === node) break
            }

            result.push(group.sort((a, b) => a - b))
            sccCount++
        }

        for (let node = 0; node < V; node++) {
            if (ids[node] === -1) dfs(node)
        }

        return result.sort((a, b) => a[0] - b[0])
    }
    dfs_tarjan_directed(V, adj) {
        let id = 0
        const ids = Array(V).fill(-1)
        const low = Array(V).fill(-1)

        const onStack = Array(V).fill(false)
        const stack = []

        let sccCount = 0
        const result = []

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

        function dfs(node, parent) {
            entryTrigger(node)
            const neighbors = adj[node] ?? []

            for (const neighb of neighbors) {
                if (neighb === parent) continue
                if (ids[neighb] === -1) {
                    dfs(neighb, node)
                    low[node] = Math.min(low[node], low[neighb])
                } else if (onStack[neighb]) {
                    low[node] = Math.min(low[node], ids[neighb])
                }
            }

            const idNode = ids[node]
            if (low[node] !== idNode) return

            const group = []
            while (stack.length) {
                const nodeStack = popStack(idNode, group)
                if (nodeStack === node) break
            }

            result.push(group.sort((a, b) => a - b))
            sccCount++
        }

        for (let node = 0; node < V; node++) {
            if (ids[node] === -1) dfs(node)
        }

        return result.sort((a, b) => a[0] - b[0])
    }
}

export const main_scc_run = () => {
    const Sol = new SolutionTarjanScc()
    const { V, edges } = tc_edge.tc_gfg_scc_6

    const matrix = GraphConverter.edgeUndirectedToMatrix(V, edges)
    const adjs = GraphConverter.matrixToAdjs(matrix)

    const matrix_direct = GraphConverter.edgeDirectedToMatrix(V, edges)
    const adjs_direct = GraphConverter.matrixToAdjs(matrix_direct)
    console.log({ adjs })
    console.log({ adjs_direct })

    console.log(Sol.tarjans(V, adjs))
    console.log(Sol.tarjans(V, adjs_direct))
}
