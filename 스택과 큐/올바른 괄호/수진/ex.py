def solution(s):
    # '(' 이면 +1
    # ')' 이면 -1

    # 한번이라도 -1이 되면 올바르지 않은 괄호
    # 마지막에 0이 아니면 올바르지 않은 괄호
    answer = True

    num = 0
    for i in range(len(s)):
        char = s[i]

        if num == -1:
            answer = False
            break

        elif char == '(':
            num += 1
        else:
            num -= 1
    
    if num != 0:
        answer = False
    
    return answer