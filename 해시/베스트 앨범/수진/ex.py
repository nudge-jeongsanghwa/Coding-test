def solution(genres, plays):
    # 많이 재생된 장르 먼저 수록
    # 장르 내에서 많이 재생된 노래 먼저 수록
    # 장르내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래 먼저 수록
    
    # 1. 우선 plays를 index를 key로, 재생량을 value로 하는 dict 만들기
    dict = {}
    for i in range(len(plays)):
        dict[i] = plays[i]
    # => dict:  {0: 500, 1: 600, 2: 150, 3: 800, 4: 2500}

    # 2. key값(value)을 기준으로 dict 내림차순(-) 정렬 후, value 같으면 고유 번호(item[0]) 기준으로 오름차순(+) 정렬   
    dict = sorted(dict.items(), key = lambda item: (-item[1], item[0]))
    # -item[1] = dict.items()의 value, item[0] = dict.items()의 key
    # => dict:  [(4, 2500), (3, 800), (1, 600), (0, 500), (2, 150)]
    
    # 3. 새로운 dict2 만들어놓고
    dict2 = {}

    # 4. dict 순회하면서 dict2에 해당 genres 없으면 추가, 있으면 해당 genres에 추가
    for i, _ in dict:
        if genres[i] not in dict2:
            dict2[genres[i]] = [i]
        else:
            # if len(dict2[genres[i]]) < 2:
            dict2[genres[i]].append(i)
    # => dict2: {'pop': [4, 1], 'classic': [3, 0, 2]}

    # 각 장르에 포함된 모든 노래들의 재생 수를 합한 값 기준으로 내림차순 정렬
    dict2 = sorted(dict2.items(), key = lambda item: sum(plays[e] for e in item[1]), reverse=True)
    # item[1] = dict2.items()의 value(각 장르에 포함된 노래들의 고유 번호 리스트)

    # 5. dict2의 values를 순회하면서 1차원 배열 만들기    
    answer = []
    for _, value in dict2:
        if len(value) == 1:
            answer.append(value[0])
        else:
            answer.append(value[0])
            answer.append(value[1])
    
    return answer