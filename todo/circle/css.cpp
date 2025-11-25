class disjoint_set
{//union by size
    int* size;
    int* parent;

    public:
    disjoint_set(int n)
    {//n = number of nodes in our set
        size = new int[n];
        for (int i = 0; i <= n-1; i++) size[i] = 1;

        parent = new int[n];
        for (int i = 0; i <= n-1; i++) parent[i] = i;
    }

    ~disjoint_set()
    {
        delete[] size;
        delete[] parent;
    }

    int findParent(int u)
    {
        if (u == parent[u]) return u;
        else return parent[u] = findParent(parent[u]);
    }

    void unionSize(int u, int v)
    {
        int uP = findParent(u), vP = findParent(v);
        if (uP == vP) return;               // already union

        if (size[uP] >= size[vP])
        {
            size[uP] += size[vP];
            parent[vP] = uP;
        }
        else
        {
            size[vP] += size[uP];
            parent[uP] = vP;
        }
    }
};

class Solution
{
    public:
   
    bool canConnect(vector<int> &c0, vector<int> &c1, int const X, int const Y)
    {//need to use double, else will have issues in sqring
        long long x0 = c0[0], y0 = c0[1], r0 = c0[2], x1 = c1[0], y1 = c1[1], r1 = c1[2];
        double dx = x1 - x0, dy = y1 - y0;
        double d = sqrt(dx*dx + dy*dy);
        
        if (d > (r0 + r1)) return false;
        if (d < abs((r0 - r1))) return false;

        double a = ((r0*r0) - (r1*r1) + (d*d)) / (2*d);
        double x2 = x0 + (dx * a/d), y2 = y0 + (dy * a/d);   
        //x2 = point which lies on the interesction of the line joining center of circles and their points of intersections 
        double h = sqrt(r0*r0 - a*a);
        double rx = -dy * (h/d), ry = dx * (h/d);

        double xi = x2 + rx, yi = y2 + rx;
        double xi_ = x2 - rx, yi_ = y2 - rx;     // xi_ = xi prime

        if ((xi > 0 && xi < X) && (yi > 0 && yi < Y)) return true;
        if ((xi_ > 0 && xi_ < X) && (yi_ > 0 && yi_ < Y)) return true;
        return false;
    }

    bool tbConnect(vector<int> &circle, long long const X, long long const Y)
    {//connected to y = Y line wrt X restriction
        long long x = circle[0], y = circle[1], r = circle[2];
        long long dy = (y - Y), dx = x - min(x, X);
        
        long long dist = dy*dy + dx*dx;
        return dist <= r*r;
    }   

    bool lrConnect(vector<int> &circle, long long const X, long long const Y)
    {//connected to x = X wrt Y restriction
        long long x = circle[0], y = circle[1], r = circle[2];
        long long dx = (x - X), dy = y - min(y, Y);

        long long dist = dy*dy + dx*dx;
        return dist <= r*r;
    }

    bool canReachCorner(int X, int Y, vector<vector<int>>& circles) 
    {
        int const n = circles.size();
        disjoint_set connected(n + 2); 
        // 0 -> n-1 for all circles, 
        // n for (0, 0) + left and top 
        // n+1 for (X, Y) + bottom and right;

        for (int i = 0; i <= n-1; i++)
        {//take a circle and if valid join to LT, RB
            int x0 = circles[i][0], y0 = circles[i][1], r0 = circles[i][2];

            if (lrConnect(circles[i], 0, Y) || tbConnect(circles[i], X, Y)) connected.unionSize(i, n);
            if (lrConnect(circles[i], X, Y) || tbConnect(circles[i], X, 0)) connected.unionSize(i, n+1);

            for (int j = i+1; j <= n-1; j++)
            {
                // if (i == j) continue; //same circle, already connected;
                if (canConnect(circles[i], circles[j], X, Y)) connected.unionSize(i, j);
            }
        }

        return connected.findParent(n) != connected.findParent(n+1);
    }
};