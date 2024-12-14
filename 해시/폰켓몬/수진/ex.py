def solution(nums):
    # nums = n마리 폰켓몬 종류 번호가 담긴 배열
    
    pets = {}
    for num in nums:
        if num in pets:
            continue
        else:
            pets[num] = True
    
    return len(pets) if len(nums) / 2 > len(pets) else len(nums) / 2