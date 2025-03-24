from itertools import permutations

def solution(k, dungeons):
    # k: 현재 피로도, dungeons = [[최소필요피로도, 소모피로도], ...]
    
    # 최악의 경우 시간 복잡도 = dungeons의 길이 값에 대한 조합을 구할 때 = O(2^8)
    
    # 1. 던전들을 탐험하는 순서 모든 조합 구하기
    cases = list(permutations(dungeons, len(dungeons))) # [([80, 20], [50, 40], [30, 10]), ([80, 20], [30, 10], [50, 40]), ... ]
    
    # 2. 각 조합 별로 탐험 가능한 던전 개수 구하기
    answer = 0
    for case in cases:
        
        energy = k
        temp = 0
        for dungeon in case:
            min_tiredness, consumed_tiredness = dungeon
            
            if energy < min_tiredness: # 탐험할 수 없으면
                break
            
            energy -= consumed_tiredness
            temp += 1
        
        answer = max(answer, temp)
    
    
    return answer