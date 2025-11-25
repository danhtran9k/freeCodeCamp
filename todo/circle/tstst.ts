function canReachCorner(xCorner, yCorner, circles) {
    const n = circles.length
    const vis = new Array(n).fill(false)

    // Check if a point is inside a circle
    function inCircle(x, y, cx, cy, r) {
        const dx = BigInt(x - cx)
        const dy = BigInt(y - cy)
        const radius = BigInt(r)
        return dx * dx + dy * dy <= radius * radius
    }

    // Check if the circle crosses the left-top corner
    function crossLeftTop(cx, cy, r) {
        const a = BigInt(Math.abs(cx)) <= BigInt(r) && cy >= 0 && cy <= yCorner
        const b =
            BigInt(Math.abs(cy - yCorner)) <= BigInt(r) &&
            cx >= 0 &&
            cx <= xCorner
        return a || b
    }

    // Check if the circle crosses the right-bottom corner
    function crossRightBottom(cx, cy, r) {
        const a =
            BigInt(Math.abs(cx - xCorner)) <= BigInt(r) &&
            cy >= 0 &&
            cy <= yCorner
        const b = BigInt(Math.abs(cy)) <= BigInt(r) && cx >= 0 && cx <= xCorner
        return a || b
    }

    // Check connectivity
    function dfs(i) {
        const [x1, y1, r1] = circles[i]
        if (crossRightBottom(x1, y1, r1)) {
            return true
        }
        vis[i] = true
        for (let j = 0; j < circles.length; j++) {
            const [x2, y2, r2] = circles[j]
            if (vis[j]) {
                continue
            }
            const dx = BigInt(x1 - x2)
            const dy = BigInt(y1 - y2)
            const sumRadii = BigInt(r1 + r2)
            if (dx * dx + dy * dy > sumRadii * sumRadii) {
                continue
            }
            if (
                BigInt(x1 * r2 + x2 * r1) < sumRadii * BigInt(xCorner) &&
                BigInt(y1 * r2 + y2 * r1) < sumRadii * BigInt(yCorner) &&
                dfs(j)
            ) {
                return true
            }
        }
        return false
    }

    for (let i = 0; i < n; i++) {
        const [x, y, r] = circles[i]
        if (inCircle(0, 0, x, y, r) || inCircle(xCorner, yCorner, x, y, r)) {
            return false
        }
        if (!vis[i] && crossLeftTop(x, y, r) && dfs(i)) {
            return false
        }
    }
    return true
}
