def solution(citations):
    citations.sort()
    
    l = len(citations)
    h = -1
    
    for i in range(l):
        if citations[i] >= h and l - i > h:
            h = max(h, min(citations[i], l - i))
        else:
            break
    
    return h