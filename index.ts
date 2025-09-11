import { demo } from './data-algo/fetch-lc/index'

function largestPathValue(colors: string, edges: number[][]): number {
    let res = 0

    const { adjs, nodeCount, updateColorCount, color_count } = setup(
        colors,
        edges
    )

    let id = 0
    let idStart = -1
    let hasCycle = false
    const ids = Array(nodeCount).fill(-1)

    const dfs = (node) => {
        if (hasCycle) return

        ids[node] = id
        id++

        for (const neighb of adjs[node]) {
            if (ids[node] >= ids[neighb] && ids[neighb] >= idStart) {
                hasCycle = true
                return
            }

            if (ids[neighb] === -1) dfs(neighb)
            updateColorCount(node, neighb)
        }

        const currColorIndex = updateColorCount(node, node)
        res = Math.max(res, color_count[node][currColorIndex])
        console.log({ node, res, currColorIndex })
    }

    for (let node = 0; node < nodeCount; node++) {
        if (ids[node] !== -1) continue

        idStart = id
        dfs(node)
        if (hasCycle) return -1
    }

    return res
}

const OFFSET_IX = 97
const COLOR_COUNT = 26
const setup = (colors: string, edges: number[][]) => {
    const nodeCount = colors.length

    const adjs = Array.from({ length: nodeCount }, () => [])
    for (const [from, to] of edges) adjs[from].push(to)

    const color_count = Array.from({ length: nodeCount }, () =>
        Array(COLOR_COUNT).fill(0)
    )
    const cIndex = (node: number) => colors.charCodeAt(node) - OFFSET_IX
    const updateColorCount = (node: number, neighb: number) => {
        const nodeColorIx = cIndex(node)

        if (node !== neighb) {
            for (let cIx = 0; cIx < COLOR_COUNT; cIx++) {
                color_count[node][cIx] = Math.max(
                    color_count[node][cIx],
                    color_count[neighb][cIx]
                )
            }
        } else {
            color_count[node][nodeColorIx]++
        }

        return nodeColorIx
    }
    return { adjs, nodeCount, color_count, updateColorCount }
}

const debug = () => {
    const tc = [
        {
            colors: 'dkuugdddk',
            edges: [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
                [4, 6],
                [2, 6],
                [6, 7],
                [5, 7],
                [6, 8],
                [7, 8]
            ]
        }
    ]
    const { colors, edges } = tc[0]
    console.log(largestPathValue(colors, edges))
}

// debug()
demo()
