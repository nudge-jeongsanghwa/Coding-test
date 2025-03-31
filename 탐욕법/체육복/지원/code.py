def solution(n, lost, reserve):
    
    _lost = sorted(list(set(lost) - set(reserve)))
    _reserve = sorted(list(set(reserve) - set(lost)))

    len_lost = len(_lost)
    len_reserve = len(_reserve)
    
    answer = n - len_lost
        
    for target in _lost:
        for j in range(len_reserve):
            if target + 1 < _reserve[j]: # 그 뒤로 검사할 필요가 없음
                break
            
            if target - 1 == _reserve[j] or target + 1 == _reserve[j]:
                answer += 1
                _reserve[j] = 0 # 대여 처리
                break
                
    return answer
