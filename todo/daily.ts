export const daily_lc = () => {
    const { beginWord, endWord, wordList } = tc.at(-1)
    console.log(findLadders(beginWord, endWord, wordList))
}

function avoidFlood(rains: number[]): number[] {
    const len = rains.length
    const seenMap = {}
    const dryQueue: number[] = []

    const res: number[] = Array.from({ length: len }, (_, ix) =>
        rains[ix] ? -1 : 0
    )

    for (let ix = 0; ix < len; ix++) {
        const lake = rains[ix]
        if (!lake) {
            dryQueue.push(ix)
            continue
        }

        if (!seenMap[lake]) {
            seenMap[lake] = [ix]
            continue
        }

        const seen = seenMap[lake].at(-1)

        let ixRes = dryQueue.pop() ?? -1
        if (ixRes < seen) return []

        seenMap[lake].pop()
        seenMap[lake].push(ix)
        res[ixRes] = lake

        if (seenMap[lake].length > 1) return []
    }

    return res
}
