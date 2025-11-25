class Solution {
    public boolean canReachCorner(int xCorner, int yCorner, int[][] circles) {
        int n = circles.length;
        Union union = new Union(n + 2);
        int index = 0;
        for(int i = 0; i < n; i++) {
            int x = circles[i][0], y = circles[i][1], r = circles[i][2];
            if(contains(x, y, 0, 0, r) || contains(x, y, xCorner, yCorner, r)) return false;
            if(x >= xCorner && y >= yCorner || x - xCorner >= r || y - yCorner >= r) continue;
            circles[index][0] = circles[i][0];
            circles[index][1] = circles[i][1];
            circles[index][2] = circles[i][2];
            if(x >= xCorner) {
                if(x <= r) return false;
                union.union(index, n);
            }else if(y >= yCorner) {
                if(y <= r) return false;
                union.union(index, n + 1);
            }else {
                boolean topLeft = x <= r || yCorner - y <= r, bottomRight = y <= r || xCorner - x <= r;
                if(topLeft && bottomRight) return false;
                if(topLeft) union.union(index, n + 1);
                else if(bottomRight) union.union(index, n);
            }
            index++;
        }

        for(int i = 0; i < index; i++) {
            int x1 = circles[i][0], y1 = circles[i][1], r1 = circles[i][2];
            for(int j = i + 1; j < index; j++) {
                int x2 = circles[j][0], y2 = circles[j][1], r2 = circles[j][2];

                if(
                    (
                        (x1 + x2) / 2 < xCorner 
                        || (y1 + y2) / 2 < yCorner
                    ) 
                    && contains(x1, y1, x2, y2, r1 + r2)
                ) union.union(i, j);
            }
            if(union.find(n) == union.find(n + 1)) return false;
        }
        return true;
    }
    private boolean contains(int x1, int y1, int x2, int y2, long r) {
        long dx = x1 - x2, dy = y1 - y2;
        return dx * dx + dy * dy <= r * r;
    }
}
class Union {
    private int[] root, rank;
    public Union(int n) {
        root = new int[n];
        rank = new int[n];
        for(int i = 0; i < n; i++) root[i] = i;
    }
    public int find(int x) {
        if(root[x] == x) return x;
        return root[x] = find(root[x]);
    }
    public void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if(rx == ry) return;
        if(rank[rx] > rank[ry]) root[ry] = rx;
        else {
            if(rank[rx] == rank[ry]) rank[ry]++;
            root[rx] = ry;
        }
    }
}