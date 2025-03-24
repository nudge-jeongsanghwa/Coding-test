import sys

def dfs(vertex, graph, visited, temp_arr):
    for curr_wire in graph[vertex]:
        if not visited[curr_wire]:
            visited[curr_wire] = True
            temp_arr.append(curr_wire)
            dfs(curr_wire, graph, visited, temp_arr)

def solution(n, wires):
    # n : 송전탑의 개수, wires: 전선 정보
    
    # 1. wires 내 wire 하나씩 순회하여 없앤 뒤 두개로 분리함
    # 2. 없앤 애들을 하나씩 기점으로 시작해 dfs 탐색해서, 분리된 각 2개의 네트워크 내 wire 개수 구함
    # 3. 개수 차이가 가장 적은 경우의 차이(절대값)을 리턴함
    
    answer = sys.maxsize
    for i in range(len(wires)): # wires[i] = 제거된 와이어어
        
        # 1. wires 내 wire 하나씩 순회하여 없앤 뒤 두개로 분리함
        arr = wires.copy()
        arr1 = arr[:i]
        arr2 = arr[i+1:]
        
        # 2. 없앤 wire 내 두 숫자를 기점으로 분리된 두개의 네트워크를 각각 dfs 탐색함
        visited = [False for _ in range(n + 1)]
        graph = [[] for _ in range(n + 1)]
        
        for num1, num2 in arr1:
            graph[num1].append(num2)
            graph[num2].append(num1)
        
        for num1, num2 in arr2:
            graph[num1].append(num2)
            graph[num2].append(num1)
        
        s1, s2 = wires[i] # 탐색 시작점
        visited[s1] = True
        visited[s2] = True
        
        temp_arr1, temp_arr2 = [], []
        dfs(s1, graph, visited, temp_arr1)
        dfs(s2, graph, visited, temp_arr2)
        
        # 3. 개수 차이가 가장 적은 경우의 차이(절대값)을 구함
        answer = min(answer, abs(len(temp_arr1) - len(temp_arr2)))
    
    return answer