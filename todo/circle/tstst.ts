function canReachCorner(xCorner, yCorner, circles) {
    const n = circles.length
    const vis = new Array(n).fill(false)
    const { checkRadius } = setup(xCorner, yCorner)

    // Check if a point is inside a circle
    function inCircle(x, y, cx, cy, r) {
        const dx = x - cx
        const dy = y - cy
        const { isIn } = checkRadius(dx, dy, r)
        return isIn
    }

    // Check if the circle crosses the left-top corner
    function crossLeftTop(cx, cy, r) {
        const a = Math.abs(cx) <= r && cy >= 0 && cy <= yCorner
        const b = Math.abs(cy - yCorner) <= r && cx >= 0 && cx <= xCorner
        return a || b
    }

    // Check if the circle crosses the right-bottom corner
    function crossRightBottom(cx, cy, r) {
        const a = Math.abs(cx - xCorner) <= r && cy >= 0 && cy <= yCorner
        const b = Math.abs(cy) <= r && cx >= 0 && cx <= xCorner
        return a || b
    }

    // Check connectivity
    function dfs(i) {
        const [x1, y1, r1] = circles[i]
        if (crossRightBottom(x1, y1, r1)) return true

        vis[i] = true
        for (let j = 0; j < circles.length; j++) {
            if (vis[j]) continue
            const [x2, y2, r2] = circles[j]
            const dx = x1 - x2
            const dy = y1 - y2
            const { isIn, radius } = checkRadius(dx, dy, r1 + r2)
            if (!isIn) continue

            // if ((x1 + x2) / 2 >= xCorner && (y1 + y2) / 2 >= yCorner) continue
            if (
                BigInt(x1 * r2 + x2 * r1) >= BigInt(radius) * BigInt(xCorner) ||
                BigInt(y1 * r2 + y2 * r1) >= BigInt(radius) * BigInt(yCorner)
            )
                continue
            if (dfs(j)) return true
        }
        return false
    }

    for (let i = 0; i < n; i++) {
        const [x, y, r] = circles[i]
        if (inCircle(0, 0, x, y, r) || inCircle(xCorner, yCorner, x, y, r)) {
            return false
        }
        if (vis[i] || !crossLeftTop(x, y, r)) continue
        if (dfs(i)) return false
    }
    return true
}

const BIG = 10 ** 6
const setup = (xCorner, yCorner) => {
    const isCornerBig = xCorner > BIG || yCorner > BIG

    const checkRadius = (dx, dy, radius) => {
        const isBig = isCornerBig || radius > BIG
        if (isBig) {
            radius = BigInt(radius)
            dx = BigInt(dx)
            dy = BigInt(dy)
        }
        const isIn = dx * dx + dy * dy <= radius * radius
        return { isIn, radius }
    }

    return { checkRadius }
}

const tc = [
    {
        xCorner: 11.1,
        yCorner: 7.5,
        circles: [
            [13.9, 6.7, 2.8],
            [7.8, 11.4, 5]
        ]
    },
    {
        xCorner: 111,
        yCorner: 75,
        circles: [
            [140, 65, 30],
            [84, 111, 44]
        ] // có thể canh chỉnh để mid ko trong góc 1/4
    }   
]

export const corneers = () => {
    const { xCorner, yCorner, circles } = tc[1]
    console.log(canReachCorner(xCorner, yCorner, circles))
}
