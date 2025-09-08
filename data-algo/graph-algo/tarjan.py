# https://www.geeksforgeeks.org/problems/strongly-connected-component-tarjanss-algo-1587115621/1

class Solution:
    
    #Function to return a list of lists of integers denoting the members 
    #of strongly connected components in the given graph.
    def tarjans(self, V, adj):
        return self.tarjan_direct(V, adj)
        
    def tarjan_direct(self, V, adj):
        result=[]

        idWalk = 0 # dont use id in python
        ids=[-1]*V
        lows=[-1]*V

        onStack=[False]*V
        stack=[]
        
        def dfs(node):
            nonlocal idWalk
            ids[node]=idWalk
            lows[node]=idWalk
            idWalk+=1

            stack.append(node)
            onStack[node]=True
            
            for neighbor in adj[node]:
                if ids[neighbor]==-1:
                    dfs(neighbor)
                    lows[node]=min(lows[node],lows[neighbor])
                elif onStack[neighbor]:
                    lows[node]=min(lows[node],ids[neighbor])
                    
            if lows[node]!=ids[node]: return

            group=[]
            while (len(stack)):
                nodeStack = stack.pop()

                onStack[nodeStack] = False
                group.append(nodeStack)

                if nodeStack == node: break

            group.sort()
            result.append(group)
                
        for node in range(V):
            if ids[node]==-1: dfs(node)

        result.sort()
        return result