import math

def solution(progresses, speeds):
    # progresses : 배포되어야 하는 순서대로 작업의 진도 적힌 배열
    # speeds : 개발 속도 적힌 배열

    # 각 기능별 남은 일자 구하기
    needed_days = []
    for progress, speed in zip(progresses, speeds):
         # 100 - (speed * 소요일정 x일) == progress
        needed_days.append(math.ceil((100 - progress) / speed))

    answer = []
    all_finished = sum(answer) == len(progresses)
    
    day = needed_days[0]
    deployed_nums = 1
    for i in range(1, len(needed_days)):
        if day >= needed_days[i]:
            deployed_nums += 1
            
            if i == len(needed_days) - 1:
                answer.append(deployed_nums)
                break
            
        else:
            answer.append(deployed_nums)
            day = needed_days[i]
            deployed_nums = 1
            
            if i == len(needed_days) - 1:
                answer.append(1)
                break
        
    return answer
