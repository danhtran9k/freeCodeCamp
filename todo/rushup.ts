function maxPartitionsAfterOperations(s: string, k: number): number {
    const { prefix, sufix, len } = setup(s, k)
    let max: number = 0
}

type TMemo = { num: number; mask: number; count: number }
const setup = (s: string, k: number) => {
    const len = s.length
    const lastIx = len - 1
    const prefix: TMemo[] = Array(len)
    const sufix: TMemo[] = Array(len)

    let num: number = 0
    let mask: number = 0
    let count: number = 0

    const calcCurrMemo = (ix: number) => {
        const binary = 1 << (s.charCodeAt(ix) - 97)
        if (!(mask & binary)) {
            count++

            if (count <= k) {
                mask |= binary
            } else {
                mask = binary
                count = 1

                num++
            }
        }
        return { num, mask, count }
    }

    for (let ix = 0; ix < lastIx; ix++) {
        prefix[ix + 1] = calcCurrMemo(ix)
    }
    for (let ix = lastIx; ix > 0; ix--) {
        sufix[ix - 1] = calcCurrMemo(ix)
    }

    return { prefix, sufix, len }
}
