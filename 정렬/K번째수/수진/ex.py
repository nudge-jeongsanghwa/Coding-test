def solution(array, commands):
    
    arr = []
    for command in commands:
        i, j, k = commands
        array = array[i-1:j]
        array.sort()
        arr.append(array[k-1])

    return arr