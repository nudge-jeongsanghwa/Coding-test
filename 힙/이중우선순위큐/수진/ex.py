import heapq

def solution(operations):
    # 다음 연산을 할 수 있는 자료구조를 말한다.
    min_q = []
    max_q = []
    
    for operation in operations:
        order, number = operation.split(' ')
        
        # 삽입
        if order == 'I':
            heapq.heappush(min_q, int(number))
            heapq.heappush(max_q, -int(number))

        # 최댓값 삭제
        if order == 'D' and number == '1':
            if len(max_q) > 0:
                max_number = heapq.heappop(max_q)
                min_q.remove(-max_number)
        
        # 최솟값 삭제
        if order == 'D' and number == '-1':
            if len(min_q) > 0:
                min_number = heapq.heappop(min_q)
                max_q.remove(-min_number)
        
    if len(min_q) == 0:
        return [0, 0]
    
    return [max(min_q), min(min_q)]