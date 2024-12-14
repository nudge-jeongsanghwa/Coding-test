def solution(participant, completion):
    # participant = 마라톤에 참여한 선수들의 이름 담긴 배열
    # completion = 완주한 선수들의 이름 담긴 배열

    # 완주 못한 단한명의 선수 찾기

    # 동명이인! 을 색출해내는 게 포인트!
    people = {}
    for person in participant:
        if person not in people:
            people[person] = 1
        else:
            people[person] += 1
    
    answer = ''
    for person in completion:
        if person not in people:
            answer = person
            break
            
        elif people[person] == 0:
            answer = person
            break

        people[person] -= 1
        
    return answer