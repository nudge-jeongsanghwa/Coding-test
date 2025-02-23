def solution(sizes):
    # 10,000 * 10,000 = 100,000,000 -> O(n^2) 가능
    
    # 1. sizes 의 각 요소 순회하면서, 가로/세로 길이 중 더 큰 거를 앞에 위치시켜 new_sizes 만듦
    new_sizes = []
    for elem1, elem2 in sizes:
        if elem1 < elem2:
            new_sizes.append([elem2, elem1])
        else:
            new_sizes.append([elem1, elem2])
    
    # 2. new_sizes 순회하면서 max_width, max_height 값 갱신
    max_width, max_height = 0, 0
    for elem1, elem2 in new_sizes:
        max_width = max(max_width, elem1)
        max_height = max(max_height, elem2)
    
    return max_width * max_height
