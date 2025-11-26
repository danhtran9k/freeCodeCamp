class Solution:
    def canReachCorner(self, X: int, Y: int, circles: List[List[int]]) -> bool:
        vis = [False] * len(circles)
        def dfs(i: int) -> bool:
            x1, y1, r1 = circles[i]
            if y1 <= Y and abs(x1 - X) <= r1 or x1 <= X and y1 <= r1:
                return True
            vis[i] = True
            for j, (x2, y2, r2) in enumerate(circles):
                # 在两圆相交相切的前提下，点 A 是否严格在矩形内
                validDist = (x1 - x2) ** 2 + (y1 - y2) ** 2 <= (r1 + r2) ** 2
                if not vis[j] and validDist and \
                   x1 * r2 + x2 * r1 < (r1 + r2) * X and \
                   y1 * r2 + y2 * r1 < (r1 + r2) * Y and \
                   dfs(j):
                    return True
            return False

        for i, (x, y, r) in enumerate(circles):
            # 圆 i 包含矩形左下角 or
            # 圆 i 包含矩形右上角 or
            # 圆 i 与矩形上边界/左边界相交相切
            if x * x + y * y <= r * r or \
               (x - X) * (x - X) + (y - Y) * (y - Y) <= r * r or \
               not vis[i] and (x <= X and abs(y - Y) <= r or y <= Y and x <= r) and dfs(i):
                return False
        return True