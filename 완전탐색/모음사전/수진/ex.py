def solution(word):
    # word가 사전에서 몇 번째 단어인지 구하는 문제
    
    # A
    # AA
    # AAA
    # AAAA
    # AAAAA
    # AAAAE
    # AAAAI
    # AAAAO
    # AAAAU
    # AAAE
    # AAAI
    # ...
    # UUUUU
    
    # 1.사전 완성하기
    # 1-1. arr에 알파벳 하나씩 넣기
    # 1-2. arr의 길이 5 넘으면, 가장 마지막에 넣었던 알파벳 빼고 그 다음 알파벳 넣는 것 반복하기
    # 1-3. 알파벳 넣을 때마다 사전(dict)에 ''.join(arr) 이 없으면 사전(dict) 에 넣기
    
    # 2. 사전에 있는 단어 하나씩 순회하면서 word 랑 같은 거 발견하면 번째 수(index) 구하기
    
    dict = [] # 사전
    arr = [] # 사전에 append 할 완성된 단어
    is_in_dict = {} # 사전에 중복되는 단어는 제외하기 위한 딕셔너리 변수
    
    # curr_num번째 숫자 고르는 함수
    def choose(curr_num):
        if curr_num == 5:
            temp_word = ''.join(arr) # ['A', 'A', 'A'] -> 'AAA'
            
            if temp_word not in is_in_dict: # 사전에 해당 단어 없으면
                dict.append(temp_word) # 사전에 추가
                is_in_dict[temp_word] = True # 이젠 사전에 있음
            
            return
        
        for alpha in ['A', 'E', 'I', 'O', 'U']:
            arr.append(alpha)
            
            # 길이가 5 아니더라도 사전(dict)에 단어 없으면 단어 추가해주기
            temp_word = ''.join(arr)
            dict.append(temp_word)
            is_in_dict[temp_word] = True
            
            choose(curr_num + 1)
            arr.pop() # return 한 뒤 실행되는 곳. 길이 5 초과했으니까 마지막 단어 제거해줌

    
    choose(0)
    
    # print(dict) -> 사전 완성
    
    # 2. 사전에 있는 단어 하나씩 순회하면서 word 랑 같은 거 발견하면 번째 수(index) 구하기
    answer = 0
    for i in range(len(dict)):
        if word == dict[i]:
            answer = i + 1
    
    return answer