from collections import deque

def solution(answers):
    # O(n^2) 가능
    
    # 각 학생 별 찍는 방식
    student1 = deque([1, 2, 3, 4, 5])
    student2 = deque([2, 1, 2, 3, 2, 4, 2, 5])
    student3 = deque([3, 3, 1, 1, 2, 2, 4, 4, 5, 5])
    
    # 각 학생 별 맞춘 횟수
    student1_solved, student2_solved, student3_solved = 0, 0, 0

    # answers 순회하면서 각 학생 별 맞췄는지 확인 및 맞춘 개수 갱신
    for answer in answers:
        student1_answer = student1.popleft()
        student2_answer = student2.popleft()
        student3_answer = student3.popleft()
        
        if answer == student1_answer:
            student1_solved += 1
        if answer == student2_answer:
            student2_solved += 1
        if answer == student3_answer:
            student3_solved += 1
        
        student1.append(student1_answer)
        student2.append(student2_answer)
        student3.append(student3_answer)

    # 정답 구하기
    max_answer = max(student1_solved, student2_solved, student3_solved)
    answer = []
    for student, solved in zip([1, 2, 3], [student1_solved, student2_solved, student3_solved]):
        if solved == max_answer:
            answer.append(student)
    
    return answer
