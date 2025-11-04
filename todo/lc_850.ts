function rectangleArea(rectangles: number[][]): number {
    let res = 0
    return res
}

const tc = [
    {
        rec: [
            [1, 0, 2, 3],
            [1, 0, 3, 1],
            [0, 0, 2, 2]
        ],
        expected: 6
    },
    {
        rec: [[0, 0, 1000000000, 1000000000]],
        expected: 49
    }
]

export const lc_850 = () => {
    const { rec, expected } = tc[0]
    console.log(rectangleArea(rec))
    console.log(expected === rectangleArea(rec))
}
