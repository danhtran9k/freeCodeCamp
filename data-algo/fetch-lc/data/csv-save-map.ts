export const LINK_KEY = new Set(['link', 'titleSlug'])

export const alias_heading_csv = {
    questionFrontendId: 'qID',
    code_snippets: 'Snip',
    categoryTitle: 'Cate',
    hasSolution: 'Sol',
    hasVideoSolution: 'Vid',
    canSeeDetail: 'See',
    contestPoint: 'Pts',
    rating: 'Rate',
    paidOnly: 'Free',
    titleSlug: 'Slug',
    difficulty: 'Diff',
    topicTags: 'Tags',
    frequency: 'Freq',
    similarCount: 'Sims',
    similarQuestion: 'SimIds',
    follow_ups: 'Ext'
}

export const USELESS_TAGS = new Set([
    'array',
    'hash-table',
    'string',
    'sorting',
    'counting',
    'matrix'
])

export const alias_words = {
    'reservoir-sampling': 'sampling',
    'probability-and-statistics': 'stats',
    'number-theory': 'num-theory',
    // graph
    'topological-sort': 'topo-sort',
    'biconnected-component': 'biconnected',
    'eulerian-circuit': 'euler-circuit',
    'strongly-connected-component': 'strongly-comp',
    'depth-first-search': 'DFS',
    'breadth-first-search': 'BFS',
    'union-find': 'union',
    // tree
    'dynamic-programming': 'DP',
    'minimum-spanning-tree': 'mst-tree',
    'binary-search-tree': 'bst-tree',
    'binary-indexed-tree': 'b-ix-tree',
    'binary-search': 'b-search',
    'binary-tree': 'b-tree',
    'segment-tree': 'seg-tree',
    'bit-manipulation': 'bit-man',
    // arry
    'monotonic-stack': 'mono-stack',
    'monotonic-queue': 'mono-queue',
    'sliding-window': 'slide-win',
    'heap-priority-queue': 'pq-heap',
    'two-pointers': '2-ptr',
    'doubly-linked-list': '2lk-list',
    'ordered-set': 'ord-set',
    // classic
    'divide-and-conquer': 'div-conq',
    'counting-sort': 'count-sort',
    'rolling-hash': 'roll-hash',
    'hash-function': 'hash-func',
    'string-matching': 'str-match',
    simulation: 'sim',
    memoization: 'memo',
    backtracking: 'backtrack',
    database: 'DB',
    combinatorics: 'combin',
    // shorten - other value - lowercase first!!
    algorithms: 'algo',
    concurrency: 'concur',
    javascript: 'js',
    medium: 'med'
}

export const shorten_lowercase = {
    medium: 'med'
}

export const arrValueMap = (arrValue: string[]) => {
    const noUnlessValues = arrValue.filter((ele) => !USELESS_TAGS.has(ele))
    return noUnlessValues
        .map((word) => {
            const lowerWord = String(word).toLowerCase()
            return alias_words[lowerWord] ?? word
        })
        .join(', ')
}

export const primitiveValueMap = (headKey, value) => {
    // if (LINK_KEY.has(headKey)) return `${LC_COM}/problems/${value}`
    if (typeof value === 'boolean') return value ? '1' : ''
    if (typeof value === 'number' && !Number.isNaN(value)) {
        // aggressive remove false / not crawl value
        return value === -1 || value === 0 ? '' : value
    }

    const lowerValue = String(value).toLowerCase()
    return alias_words[lowerValue] ?? value
}
