def solution(numbers):
    # 1. numbers 안의 숫자들을 문자열 타입으로 바꿔서 소팅
    arr = []
    for number in numbers:
        arr.append(str(number))
    arr.sort()
    
    # 2. 각 숫자(문자열)를 3번 반복하여 비교 ('3' → '333', '30' → '303030')
    sorted_arr = sorted(arr, key=lambda x: x * 3, reverse=True)
    
    # 3. sorted_arr 순회하며 정답 만들기
    answer = ''
    for elem in sorted_arr:
        answer += elem
        
    if int(answer) == 0: return "0"
    
    return answer