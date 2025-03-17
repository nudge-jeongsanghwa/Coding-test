def solution(numbers):
    answers = []
    
    # 1. numbers 내의 숫자들로 만들 수 있는 모든 숫자들의 케이스 조회
    # 2. 각 케이스별로 소수인지 확인 (= 1을 제외한 숫자들로 나누어 떨어지는지 확인)
    
    all_cases = []
    case = []
    
    # 1. numbers 내의 숫자들로 만들 수 있는 모든 숫자들의 케이스 조회
    # choose: curr_num 번째에 위치할 숫자 구하는 함수
    def choose(curr_num):
        if curr_num == len(numbers) + 1:
            all_cases.append(case)
            return
        
        for i in range(len(numbers)):
            case.append(numbers[i])
            all_cases.append(case.copy()) # 여기서 넣어줌
            choose(curr_num + 1)
            case.pop()
    
    choose(1)

    # print('all: ', all_cases)
    
    # 2. 각 케이스별로 소수인지 확인 (=1을 제외한 원소들로 나누어 떨어지는지 확인)
    # 2-1. 이때, numbers 에 속해있는 숫자만으로 이루어져있는지 확인 필요!
    # (ex. numbers="17"인데, [7,7]인 케이스 제외해야함)
    for case in all_cases:
        if len(case) == 0:
            continue
        
        # numbers에 속해있는 숫자만으로 이루어져있는지 확인 (개수 초과하지 않는지 확인)
        will_be_continued = False
        for number in case:
            if case.count(number) > numbers.count(number):
                will_be_continued = True
                break
        
        if will_be_continued:
            continue
        
        # 각 케이스별로 소수인지 확인 (= 1을 제외한 숫자들로 나누어 떨어지는지 확인)
        num = int(''.join(case))
        
        # 소수는 1 이상이여야 함
        if num <= 1:
            continue
        
        for i in range(2, num):
            if num % i == 0:
                will_be_continued = True
                break
        
        if will_be_continued:
            continue
        
        # 소수인 경우
        answers.append(num)
    
    return len(set(answers))