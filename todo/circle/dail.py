class Solution:
    def canReachCorner(self, X: int, Y: int, A: List[List[int]]) -> bool:
        def find(i):
            if f[i] != i:
                f[i] = find(f[i])
            return f[i]

        f = list(range((n := len(A)) + 2))
        for i in range(n):
            x, y, r = A[i]

            #   if circle overlaps exit
            if (x - X) ** 2 + (y - Y) ** 2 <= r ** 2: 
                return False  

            if (x <= r and y <= Y) or (y + r >= Y and x <= X):
                f[find(n)] = find(i)
            if (y <= r and x <= X) or (x + r >= X and y <= Y):
                f[find(n + 1)] = find(i)

            if find(n) == find(n + 1): 
                return False     
        
        #   if circle touches both borders
        if find(n) == n or find(n + 1) == n + 1: 
            return True        
                                                
        #   if either border is untouched
        for i in range(n):
            x, y, r = A[i]
            
            # Circle 1 out of usable range
            if x - r >= X or y - r >= Y or (x >= X and y >= Y):     
                continue

            for j in range(i):
                if find(i) == find(j):                              
                    continue

                x2, y2, r2 = A[j]
                if (x + x2) / 2 >= X and (y + y2) / 2 >= Y:         
                  # Circle pair out of usable range
                    continue

                if (x - x2) ** 2 + (y - y2) ** 2 <= (r + r2) ** 2:  
                  # Circles intersect
                    f[find(i)] = find(j)
                    if find(n) == find(n + 1):                      
                        return False      
                  #   if both borders are unioned
        return True