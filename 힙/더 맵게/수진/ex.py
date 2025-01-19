import heapq

def solution(scoville, K):
    # scoville : 모든 음식의 스코빌 지수를 담은 배열 (최대 길이: 1,000,000)
    # K : 지수가 원하는 스코빌 지수 (최대 값: 1,000,000,000)
    
    # 모든 음식의 스코빌 지수가 K 이상으로 만들기 위해 섞어야 하는 최소 횟수 구하기
    
    class PriorityQueue:
        def __init__(self):
            self.items = []
        
        def push(self, item):
            heapq.heappush(self.items, item)

        def top(self):
            return self.items[0]

        def pop(self):
            return heapq.heappop(self.items)
        
        def empty(self):
            return not len(self.items)
    
    # 1. 우선순위 큐 생성
    pq = PriorityQueue()
    
    # 2. 우선순위 큐에 배열 scoville 요소들 push
    for sv in scoville:
        pq.push(sv)
    
    # 3. 스코비 지수 가장 낮은 음식이 K 이상 될 때까지 섞기 반복
    answer = 0
    while pq.top() < K:
        first_food = pq.pop()
        
        if pq.empty():
            answer = -1
            break
        
        second_food = pq.pop()
        
        pq.push(first_food + second_food * 2)
        answer += 1
    
    return answer