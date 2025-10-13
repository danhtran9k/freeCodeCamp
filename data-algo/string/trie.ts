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
}
// ko dùng this.children vì con trỏ this,
// gán this (root) vào node trước, ý tưởng tương tự linked list
