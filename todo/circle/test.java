class Solution {
    // The circles in the grid
    private lateinit var circles: Array<IntArray>

    // Coordinates for the corner (destination)
    private var xCorner: Int = 0
    private var yCorner: Int = 0

    // Array to track which circles have been visited during DFS
    private lateinit var vis: BooleanArray

    fun canReachCorner(xCorner: Int, yCorner: Int, circles: Array<IntArray>): Boolean {
        val n = circles.size
        this.circles = circles
        this.xCorner = xCorner
        this.yCorner = yCorner

        // Initialize the visited array
        vis = BooleanArray(n)

        // Iterate over each circle and check conditions
        for (i in 0 until n) {
            val c = circles[i]
            val x = c[0]
            val y = c[1]
            val r = c[2]

            // If the circle intersects the origin (0,0) or the corner, return false
            if (inCircle(0L, 0L, x.toLong(), y.toLong(), r.toLong()) || 
                inCircle(xCorner.toLong(), yCorner.toLong(), x.toLong(), y.toLong(), r.toLong())) {
                return false
            }

            // If the circle crosses the left-top part of the grid and DFS hasn't visited it yet, proceed
            if (!vis[i] && crossLeftTop(x.toLong(), y.toLong(), r.toLong()) && dfs(i)) {
                return false
            }
        }

        return true
    }

    private fun inCircle(x: Long, y: Long, cx: Long, cy: Long, r: Long): Boolean {
        return (x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r
    }

    private fun crossLeftTop(cx: Long, cy: Long, r: Long): Boolean {
        val a = Math.abs(cx) <= r && (cy >= 0 && cy <= yCorner)
        val b = Math.abs(cy - yCorner) <= r && (cx >= 0 && cx <= xCorner)
        return a || b
    }

    private fun crossRightBottom(cx: Long, cy: Long, r: Long): Boolean {
        val a = Math.abs(cx - xCorner) <= r && (cy >= 0 && cy <= yCorner)
        val b = Math.abs(cy) <= r && (cx >= 0 && cx <= xCorner)
        return a || b
    }

    private fun dfs(i: Int): Boolean {
        val c = circles[i]
        val x1 = c[0].toLong()
        val y1 = c[1].toLong()
        val r1 = c[2].toLong()

        // If the current circle crosses the destination's bottom-right corner, return true
        if (crossRightBottom(x1, y1, r1)) {
            return true
        }

        // Mark the current circle as visited
        vis[i] = true

        // Iterate over all other circles to check connectivity
        for (j in circles.indices) {
            val c2 = circles[j]
            val x2 = c2[0].toLong()
            val y2 = c2[1].toLong()
            val r2 = c2[2].toLong()

            // Skip if this circle has already been visited
            if (vis[j]) continue

            // Check if the current circles are not intersecting, continue if they don't
            if ((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) > (r1 + r2) * (r1 + r2)) continue

            // Check if connecting these circles brings us closer to the destination
            if (x1 * r2 + x2 * r1 < (r1 + r2) * xCorner && y1 * r2 + y2 * r1 < (r1 + r2) * yCorner
                && dfs(j)) {
                return true
            }
        }

        // Return false if no path to the destination was found
        return false
    }
}