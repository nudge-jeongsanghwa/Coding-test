### 해설 ###
# 카테고리가 2개 이상이라면 카테고리별 옷의 개수에 입지 않을 경우의 수인 1을 더한 뒤, 곱한 합을 구한다.
# 코니는 반드시 1개 이상의 옷을 입어야 하므로 아무것도 입지 않을 경우의 수 1을 총합에서 빼준다.

def solution(clothes):
    answer = 1
    dict = {}
    
    for cloth in clothes:
        cloth_name, category = cloth
        
        if category in dict:
            dict[category].append(cloth_name)
        else:
            dict[category] = [cloth_name]
    
    print(dict)
    for d in dict:
        answer *= len(dict[d]) + 1
        print(answer)
        
    answer -= 1
    
    return answer