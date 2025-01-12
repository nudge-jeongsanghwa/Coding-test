# 양방향 큐
from collections import deque

def solution(priorities, location):
    # priorities: 우선순위 담긴 배열 (숫자 클수록 우선순위 높음)
    # location: 실행순서 알고싶은 프로세스 위치(인덱스)

    # 완전탐색 해도 되나?
    # [2, 1, 3, 2]
    
    ans = 0
    q = deque(priorities)
    
    while True:
        # 맨 왼쪽 원소가 젤 큰 우선순위면 ans + 1 해주고 break
        if q[0] == max(q):
            if location == 0:
                ans += 1
                break
            
            q.popleft()
            location -= 1
            ans += 1
        else:
            if location == 0:
                location = len(q) - 1
            else:
                location -= 1
            
            n = q.popleft()
            q.append(n)

    return ans