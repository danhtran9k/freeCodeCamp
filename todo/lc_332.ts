const START = 'JFK'
function findItinerary(tickets: string[][]): string[] {
    const { adjs } = setup(tickets)
    const res = []

    let start = ''
    let next = START

    while (start !== next) {
        res.push(next)
        start = next

        const nexts = adjs.get(next)

        if (nexts?.length) {
            next = nexts.at(-1)
            nexts.pop()
        }
    }

    return res
}

const setup = (tickets: string[][]) => {
    const adjs = new Map<string, string[]>()
    const inStart = new Set<string>()

    for (const [from, to] of tickets) {
        if (!adjs.has(from)) adjs.set(from, [])
        adjs.get(from).push(to)

        if (to === START) inStart.add(from)
    }

    for (const [from, tos] of adjs.entries()) {
        if (from !== START) {
            tos.sort((a, b) => b.localeCompare(a))
            continue
        }

        tos.sort((a, b) => {
            if (
                (inStart.has(a) && inStart.has(b)) ||
                (!inStart.has(a) && !inStart.has(b))
            )
                return b.localeCompare(a)

            if (inStart.has(a)) return 1
            if (inStart.has(b)) return -1
        })
    }

    return { adjs, inStart }
}

export const lc_332 = () => {
    // https://leetcode.com/problems/reconstruct-itinerary/
    const { tickets, expected } = tc[2]
    console.log(
        findItinerary(tickets),
        expected,
        findItinerary(tickets).join(',') === expected.join(',')
    )
}

const tc = [
    {
        tickets: [
            ['EZE', 'AXA'],
            ['TIA', 'ANU'],
            ['ANU', 'JFK'],
            ['JFK', 'ANU'],
            ['ANU', 'EZE'],
            ['TIA', 'ANU'],
            ['AXA', 'TIA'],
            ['TIA', 'JFK'],
            ['ANU', 'TIA'],
            ['JFK', 'TIA']
        ],
        expected: [
            'JFK',
            'ANU',
            'EZE',
            'AXA',
            'TIA',
            'ANU',
            'JFK',
            'TIA',
            'ANU',
            'TIA',
            'JFK'
        ]
    },
    {
        tickets: [
            ['JFK', 'SFO'],
            ['SFO', 'JFK'],
            ['JFK', 'ATL'],
            ['ATL', 'AAA']
        ],
        expected: ['JFK', 'SFO', 'JFK', 'ATL', 'AAA']
    },
    {
        tickets: [
            ['EZE', 'TIA'],
            ['EZE', 'HBA'],
            ['AXA', 'TIA'],
            ['JFK', 'AXA'],
            ['ANU', 'JFK'],
            ['ADL', 'ANU'],
            ['TIA', 'AUA'],
            ['ANU', 'AUA'],
            ['ADL', 'EZE'],
            ['ADL', 'EZE'],
            ['EZE', 'ADL'],
            ['AXA', 'EZE'],
            ['AUA', 'AXA'],
            ['JFK', 'AXA'],
            ['AXA', 'AUA'],
            ['AUA', 'ADL'],
            ['ANU', 'EZE'],
            ['TIA', 'ADL'],
            ['EZE', 'ANU'],
            ['AUA', 'ANU']
        ],
        expected: [
            'JFK',
            'AXA',
            'AUA',
            'ADL',
            'ANU', // 5
            'AUA',
            'ANU',
            'EZE',
            'ADL',
            'EZE', // 10
            'ANU',
            'JFK',
            'AXA',
            'EZE', // next is diff
            'TIA', // 15
            'AUA',
            'AXA',
            'TIA',
            'ADL',
            'EZE', // 20
            'HBA' // 21
        ]
    }
]
