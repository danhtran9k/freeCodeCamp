export class Trie {
    isEndWord = false
    children: Record<string, Trie> = {}

    insert(word: string): void {
        if (!word) return
        const node = this.walk(word, () => new Trie())
        node.isEndWord = true
    }

    search(word: string): boolean {
        const end = this.walk(word)
        return Boolean(end && end.isEndWord)
    }

    startsWith(prefix: string): boolean {
        const end = this.walk(prefix)
        return Boolean(end)
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

    checkDelete(node: Trie): boolean {
        return Object.keys(node.children).length === 0
    }

    searchAndDelete(word: string) {
        let found = false

        const dfs = (node: Trie, index: number): boolean => {
            if (index === word.length) {
                if (!node.isEndWord) return false

                found = true
                node.isEndWord = false
                return this.checkDelete(node)
            }

            const char = word[index]
            if (!node.children[char]) return

            const canDelete = dfs(node.children[char], index + 1)
            if (canDelete) {
                delete node.children[char]
                return this.checkDelete(node)
            }
            return false
        }

        dfs(this, 0)
        return found
    }
}
// ko dùng this.children vì con trỏ this,
// gán this (root) vào node trước, ý tưởng tương tự linked list
