def solution(arr):
    answer = []
    
    for i in range(1, len(arr)):
        if i == 1:
            answer.append(arr[i-1])
            
        if arr[i] == arr[i-1]:
            continue
        
        answer.append(arr[i])
        
    return answer