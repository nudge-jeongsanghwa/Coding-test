import math

def dfs(node, graph, visited):
    visited[node] = True
    count = 1  # 현재 노드를 방문했으므로 1로 시작
    
    for next_node in graph[node]:
        if not visited[next_node]:
            count += dfs(next_node, graph, visited)  # 재귀로 방문한 카운트 합산
    
    return count

def solution(n, wires):
    answer = float('inf')
    graph = [[] for _ in range(n + 1)]
    
    for node1, node2 in wires:
        graph[node1].append(node2)
        graph[node2].append(node1)

    for node1, node2 in wires:
        visited = [False] * (n + 1)
        
        # 전선 끊기
        graph[node1].remove(node2)
        graph[node2].remove(node1)
        
        # 정답 갱신
        count = dfs(1, graph, visited)
        diff = abs(count - (n - count))
        answer = min(diff, answer)
        
        # 전선 복구
        graph[node1].append(node2)
        graph[node2].append(node1)
    
    return answer
