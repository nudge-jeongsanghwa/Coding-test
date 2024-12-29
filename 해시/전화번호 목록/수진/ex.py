def solution(phone_book):
    dict = {}
    
    # "119"이면, { "1": 1, "11": 1 } 만들기. "119" : 1 는 제외 
    for phone in phone_book:
        for i in range(len(phone)):
            if i == len(phone) - 1:
                continue
            
            key = phone[:i+1]
            dict[key] = 1
    
    # dict의 key에 전화번호 있는지 확인
    for phone in phone_book:
        if phone in dict:
            return False
    
    return True