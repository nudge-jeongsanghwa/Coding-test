def solution(brown, yellow):
    answer = []
    
    # 갈색 가로 길이 = 노란색 가로 길이 + 2
    # 갈색 세로 길이 = 노란색 세로 길이 + 2
    
    # 1. 노란색 격자의 수로 만들 수 있는 모든 경우의 수를 만들고,
    # 2. 각 경우에 갈색의 가로/세로 길이가 각각 노란색의 가로/세로 길이 + 2 인지 확인
    
    
    # 가능한 모든 경우의 노란색 가로 길이(= i) 구하기
    for i in range(1, yellow + 1):
        yellow_width = i
        
        if yellow % i != 0: # 나누어 떨어지지 않는 경우는 제외
            continue
        
        yellow_height = yellow / i
        
        # 갈색의 가로/세로 길이가 각각 노란색의 가로/세로 길이 + 2 인지 확인
        brown_width = yellow_width + 2
        brown_height = yellow_height + 2
        
        if brown_width*2 + (brown_height-2)*2 == brown and brown_width >= brown_height:
            answer = [brown_width, brown_height]
            break
    
    return answer