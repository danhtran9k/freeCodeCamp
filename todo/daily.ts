function canReachCorner(
    xCorner: number,
    yCorner: number,
    circles: number[][]
): boolean {
    const { isOut, validIntersect, len } = setup(xCorner, yCorner, circles)
    const union = uDS_arr(len + 2)

    return true
}

export const setup = (
    xCorner: number,
    yCorner: number,
    circles: number[][]
) => {
    const len = circles.length
    const isOut = (x: number, y: number) => x > xCorner || y > yCorner

    const validIntersect = (circle: number[]) => {
        const [x, y, r] = circle
        const leftInside = y <= r && x <= xCorner
        const topIntersect = Math.abs(x - xCorner) <= r && y <= yCorner

        const rightInside = x <= r && y <= yCorner
        const bottomIntersect = Math.abs(y - yCorner) <= r && x <= xCorner

        return leftInside || rightInside || topIntersect || bottomIntersect
    }

    return { isOut, validIntersect, len }
}

function uDS_arr(nodes: number) {
    const parents = Array.from({ length: nodes }, (_, i) => i)

    function find(node: number) {
        if (parents[node] !== node) parents[node] = find(parents[node])
        return parents[node]
    }

    function isRankN1(n1, n2) {
        return n1 <= n2
    }

    function uf(na, nb, isExec = true) {
        const parent_na = find(na)
        const parent_nb = find(nb)

        if (parent_na === parent_nb) return false
        if (!isExec) return true

        if (isRankN1(parent_na, parent_nb)) {
            parents[parent_nb] = parent_na
        } else {
            parents[parent_na] = parent_nb
        }
        return true
    }

    return { parents, find, uf }
}
