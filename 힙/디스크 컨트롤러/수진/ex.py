import heapq

def solution(jobs):
    # jobs: [[요청시각, 소요시간], ...]
    answer = 0
        
    # 1. 1)요청시각 빠른 순, 2)소요시간 짧은 순을 우선순위로 하는 priority-queue 만든다
    pq = []
    for job in jobs:
        heapq.heappush(pq, job)
    
    # 2. 작업시간 증가시키면서, 현재 실행될 작업 처리하는 과정 반복한다
    current_time = 0
    while len(pq) > 0:
        # 2-1. 요청시각이 현재 작업시간과 같거나 이전인 우선순위큐 첫번째 인덱스 값들 모두 반환
        will_proceeded = [] # 실행될 애들 임시 저장소
        for i in range(len(pq)):
            job = pq[0]

            if job[0] <= current_time:
                first_job = heapq.heappop(pq)
                will_proceeded.append(first_job)
            else:
                break
        
        print(current_time)
        print(will_proceeded)
        
        # 2-2. 소요시간 기준으로 오름차순 정렬 (소요시간 가장 짧은 것부터 실행 시작 위함)
        will_proceeded.sort(key=lambda a:a[1]) 
        
        # 2-3. 각 작업의 반환시간(종료시각-작업요청시각) 구하기
        for process in will_proceeded:
            request_time = process[0]
            needed_time = process[1]
            
            current_time += needed_time # current_time을 소요시간만큼 + 해줌
            answer += (current_time - request_time)  # 작업 요청부터 종료까지 걸린 시간을 answer에 더해줌
        
    return answer/len(jobs)

print(solution([[0,3], [1,9], [3,5]]))