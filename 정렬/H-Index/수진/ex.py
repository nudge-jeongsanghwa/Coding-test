def solution(citations):
    # citations 의 max 길이 = 1,000
    
    # 1. 내림차순 소팅
    citations.sort(reverse=True)
    
    
    # 2. h: 10000~0 순회하며 h가 정답이 될 수 있는지 확인
    answer = 10000
    for h in range(10000, -1, -1):
        
        # 2-1. citations를 순회하며 front_cits와 back_cits 구함
        # h번 이상 인용된 논문 개수(front_cits) 구하기 -> 총 개수가 h편 이상이어야 함
        # h번 미만 인용된 논문 개수(back_cits) 구하기 -> 총 개수가 h편 이하여야 함
        front_cits = 0
        for i in range(len(citations)): 
            if citations[i] >= h:
                front_cits += 1
        back_cits = len(citations) - front_cits
        
        # 2-2. h가 answer 일 수 있는지 확인
        # front_cits가 h보다 크거나 같으면서 back_cits가 h보다 작거나 같으면, h == answer
        if front_cits >= h and back_cits <= h:
            answer = h
            break
    
    return answer