def go_dungeon(k, dungeons, answer, depth = 0):
    answer = max(answer, depth)
    
    for i in range(len(dungeons)):
        require, cost = dungeons[i]
        
        if k >= require and require > 0:
            # 다음 뎁스로 넘어가기 위하여 방문 처리
            dungeons[i] = [-require, cost]
            answer = go_dungeon(k - cost, dungeons, answer, depth + 1)

            # 재귀함수 실행 후 원복
            dungeons[i] = [require, cost] 
            
    return answer
    

def solution(k, dungeons):
    return go_dungeon(k, dungeons, -1)
     