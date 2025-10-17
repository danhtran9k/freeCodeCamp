export class Trie {
    isEndWord = false
    children: Record<string, Trie> = {}

    insert(word: string): void {
        if (!word) return
        const node = this.walk(word, () => new Trie())
        node.isEndWord = true
    }

    walk(word: string, populateNull?: () => Trie): Trie | null {
        let node: Trie = this
        for (const char of word) {
            if (!node.children[char]) {
                if (!populateNull) return null
                node.children[char] = populateNull()
            }
            node = node.children[char]
        }
        return node
    }
}
type TTrie = {
    isEndWord: boolean
    children: Record<string, TTrie>
}

// depth 0 = root, depth 1 = index 0, depth (len) = len - 1
const setup = (board: string[][], words: string[]) => {
    const row = board.length
    const col = board[0].length

    const trie: TTrie = {
        isEndWord: false,
        children: {}
    }

    const insert = (word: string) => {
        if (!word) return

        let node: TTrie = trie
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = {
                    isEndWord: false,
                    children: {}
                }
            }
            node = node.children[char]
        }

        node.isEndWord = true
    }

    for (const word of words) {
        insert(word)
    }

    const checkDelete = (node: TTrie): boolean => {
        return Object.keys(node.children).length === 0
    }

    return { trie, checkDelete, row, col }
}

function findWords(board: string[][], words: string[]): string[] {
    const result: string[] = []
    const { trie, checkDelete, row, col } = setup(board, words)

    const searchAndDelete = (charRoot: string, word: string) => {
        let found = false

        const dfs = (node: TTrie, index: number): boolean => {
            if (index === word.length) {
                if (!node.isEndWord) return false

                found = true
                node.isEndWord = false
                return checkDelete(node)
            }

            const char = word[index]
            if (!node.children[char]) return

            const canDelete = dfs(node.children[char], index + 1)
            if (canDelete) {
                delete node.children[char]
                return checkDelete(node)
            }
            return false
        }

        dfs(trie, 0)
        return found
    }

    for (let ix = 0; ix < row; ix++) {
        for (let iy = 0; iy < col; iy++) {
            const root = board[ix][iy]
            if (searchAndDelete(root)) {
                result.push(root)
            }
        }
    }

    return result
}
