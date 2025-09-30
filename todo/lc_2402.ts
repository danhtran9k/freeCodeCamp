function mostBooked(n: number, meetings: number[][]): number {
    let res = 0
    return res
}

export const lc_2402 = () => {
    // https://leetcode.com/problems/meeting-rooms-iii/
    const { n, meetings } = tc[0]
    console.log(mostBooked(n, meetings))
}

const tc = [
    {
        n: 2,
        meetings: [
            [0, 10],
            [1, 5],
            [2, 7],
            [3, 4]
        ]
    },
    {
        n: 3,
        meetings: [
            [1, 20],
            [2, 10],
            [3, 5],
            [4, 9],
            [6, 8]
        ]
    }
]
