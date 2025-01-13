from collections import deque

def solution(prices):
    answer = [0 for _ in range(len(prices))]
    stack = deque([])
    
    len_prices = len(prices)
    
    for i in range(len_prices):
        if i == 0 or i == len_prices - 1:
            stack.append([i, prices[i]])
        else:
            if stack[-1][1] <= prices[i]:
                stack.append([i, prices[i]])
            else: # stack[-1][1] > prices[i]
                while len(stack) and stack[-1][1] > prices[i]:
                    num = stack.pop()
                    answer[num[0]] = i - num[0]
                stack.append([i, prices[i]])

    for rest in stack:
        answer[rest[0]] = len_prices - rest[0] - 1
    
    return answer

        