def solution(n, lost, reserve):
    # n: 전체 학생 수 (2 ~ 30)
    # lost: 체육복 도난당한 학생들의 번호 담긴 배열 (1 ~ n)
    # reserve: 여벌 체육복 있는 학생들의 번호 담긴 배열 (1 ~ n)
    
    students = {} # students[num]: num번 학생이 갖고 있는 체육복 개수
    
    # 1. n 돌면서 students[num] = 1 로 초기화 (학생이 모두 1개의 체육복 가지고 있음)
    # 2. lost 돌면서 students[num] = 0 으로 초기화 (해당 학생은 체육복 없음, 0개)
    # 3. reserve 돌면서 students[num] 에 + 1 해주기
    
    # 4. n 돌면서 students[num-1], students[num+1] 학생이 빌려줄 수 있으면 빌려줌
    # -> 경우의 수를 생각해봤는데 항상 students[num+1]보다 students[num-1]를 먼저 고려해도 됨
    
    # 5. students 돌면서 1개 이상의 체육복 갖고 있는 학생 수 구하고 리턴
    
    # 1.
    for num in range(1, n + 1):
        students[num] = 1
    
    # 2.
    for num in lost:
        students[num] = 0
    
    # 3.
    for num in reserve:
        students[num] += 1
    
    # 4.
    for num in range(1, n + 1):
        if students[num] > 0: # 체육복 잃어버린 학생 아니면
            continue
        
        front = num - 1
        back = num + 1
        
        if front in students and students[front] >= 2:
            students[front] -= 1
            students[num] += 1
            continue
        
        if back in students and students[back] >= 2:
            students[back] -= 1
            students[num] += 1
        
    
    answer = 0
    for num in range(1, n + 1):
        if students[num] >= 1:
            answer += 1
    
    return answer