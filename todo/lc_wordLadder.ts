const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
type TQueue = { word: string; path: string[] }
function findLadders(
    beginWord: string,
    endWord: string,
    wordList: string[]
): string[][] {
    const setList = new Set<string>(wordList)
    if (!setList.has(endWord)) return []

    const { ajds, found } = setup(beginWord, endWord, setList)
    if (!found) return []

    const path = []
    const res: string[][] = []

    function backtrack(word) {
        path.push(word)

        if (word === endWord) {
            res.push([...path])
            path.pop()
            return
        }

        for (const nextWord of ajds[word] ?? []) backtrack(nextWord)
        path.pop()
    }

    backtrack(beginWord)

    return res
}

const setup = (beginWord, endWord, setList: Set<string>) => {
    const ajds: Record<string, Set<string>> = {}

    let found = false
    let queue = [beginWord]
    setList.delete(beginWord)

    while (queue.length && !found) {
        const nextQueue = []

        for (const word of queue) {
            for (let ix = 0; ix < word.length; ix++) {
                const prefix = word.substring(0, ix)
                const suffix = word.substring(ix + 1)

                for (const char of ALPHABET) {
                    const newWord = prefix + char + suffix
                    if (!setList.has(newWord) || newWord === word) continue
                    if (newWord === endWord) found = true

                    if (!ajds[word]) ajds[word] = new Set()
                    ajds[word].add(newWord)

                    nextQueue.push(newWord)
                }
            }
        }

        for (const word of nextQueue) setList.delete(word)

        if (found) {
            for (const word of queue) {
                const next_ajds = ajds[word]
                if (!next_ajds) continue

                for (const next_word of next_ajds) {
                    if (next_word === endWord) continue
                    next_ajds.delete(next_word)
                }
            }
        }

        queue = nextQueue
    }

    return { ajds, found }
}

export const lc_wordLadder = () => {
    const { beginWord, endWord, wordList } = tc.at(-1)
    console.log(findLadders(beginWord, endWord, wordList))
}

const tc = [
    {
        beginWord: 'hit',
        endWord: 'cog',
        wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
    },
    {
        beginWord: 'red',
        endWord: 'tax',
        wordList: ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee']
    },
    {
        beginWord: 'hot',
        endWord: 'dog',
        wordList: ['hot', 'dog']
    },
    {
        beginWord: 'hot',
        endWord: 'dog',
        wordList: ['hot', 'cog', 'dog', 'tot', 'hog', 'hop', 'pot', 'dot']
    }
]
