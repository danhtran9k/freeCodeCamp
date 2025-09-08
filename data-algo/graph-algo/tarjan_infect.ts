import { tc_articulation } from '../testcase/gen-tc-tarjan'
import { adjsToMatrixUndirected } from '../testcase/graph-converter'

function minMalwareSpread2(graph: number[][], initial: number[]): number {
    const { dfs, countSub, visited } = tarjan_infect_setup(graph, initial)

    let maxSize = 0
    let minIndex = 300

    for (const node of initial) {
        if (visited[node] === -1) {
            dfs(node, node)
        }

        const size = countSub[node]
        if (size > maxSize || (size === maxSize && node < minIndex)) {
            maxSize = size
            minIndex = node
        }
    }

    return minIndex
}

const tarjan_infect_setup = (graph: number[][], initial: number[]) => {
    const len = graph.length

    let id = 0
    const ids = Array(len).fill(-1)
    const visited = Array(len).fill(-1)

    const initialSet = new Set(initial)
    const countSub = Array(len).fill(0)

    // const parentSize: Record<number, number> = {}
    // vì đi tiếp khi gặp source khác, ko skip nên phải là array
    // ngoài ra dùng array khỏi track parent color -> vốn fail bài này

    const dfs = (node, rootStart) => {
        ids[node] = id
        visited[node] = id
        id++

        let flag = initialSet.has(node) && node !== rootStart
        // có flag nhưng vẫn duyệt đủ, ko skip như 1

        const neighbougrs = graph[node]
        for (let neighb = 0; neighb < len; neighb++) {
            if (!neighbougrs[neighb]) continue

            if (ids[neighb] === -1) {
                const childSize = dfs(neighb, -1)
                if (!childSize) flag = true

                if (visited[neighb] >= ids[node]) {
                    countSub[node] += childSize
                }

                visited[node] = Math.min(visited[node], visited[neighb])
            } else {
                visited[node] = Math.min(visited[node], ids[neighb])
            }
        }

        return 1 + countSub[node]
    }

    return { dfs, countSub, visited }
}

export const tarjan_2_run = () => {
    const { V, adjs } = tc_articulation.tc8
    const initial = [4, 5, 6]
    const matrix = adjsToMatrixUndirected(V, adjs)
    console.log(minMalwareSpread2(matrix, initial))
}
