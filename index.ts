import { run_lc_685 } from './data-algo/graph-algo/tree_redudant_conns'

// run_lc_685()

function getNoZeroIntegers(n: number): number[] {
    if (n < 10) return [1, n - 1]
    let small = 0

    let tmp = n
    let next = 1
    let base = 0

    while (tmp >= 10) {
        const last = tmp % 10
        if (last > next) {
            small += Math.pow(10, base) * (10 - last)
        } else {
            small += Math.pow(10, base) * (10 - next)
        }
        small += Math.pow(10, base) * (10 - last)

        tmp = Math.floor(tmp / 10)
        base++
        console.log({ tmp, small, last })
    }

    return [small, n - small]
}

console.log(getNoZeroIntegers(2218))
