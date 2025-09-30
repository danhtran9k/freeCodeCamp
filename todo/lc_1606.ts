function busiestServers(
    k: number,
    arrival: number[],
    load: number[]
): number[] {
    let res = []
    return res
}

export const lc_1606 = () => {
    // https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/

    const { k, arrival, load } = tc[0]
    console.log(busiestServers(k, arrival, load))
}

const tc = [
    {
        k: 3,
        arrival: [1, 2, 3, 4, 5],
        load: [5, 2, 3, 3, 3]
    },
    {
        k: 3,
        arrival: [1, 2, 3],
        load: [10, 12, 11]
    }
]
