def backtrack(
    word_arr,
    word_str='',
    length=0,
    alphabets = ['A', 'E', 'I', 'O', 'U']
):
    if word_str != '':
        word_arr.append(word_str)
    
    if length == 5:
        return
    
    for i in range(5):
        backtrack(word_arr, word_str + alphabets[i], length + 1)    
    

def solution(word):
    word_arr = []
    backtrack(word_arr)
    answer = 1
   
    word_arr.sort()
    
    for target in word_arr:
        if target == word:
            return answer
        answer += 1
    