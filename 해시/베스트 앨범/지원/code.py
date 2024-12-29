def solution(genres, plays):
    # classic: [0, []]
    # pop: [0, []]
    music = {}
    
    for i in range(len(genres)):
        if genres[i] in music:
            music[genres[i]][0] += plays[i]
            music[genres[i]][1].append([plays[i], i])
        else:
            music[genres[i]] = [plays[i], [[plays[i], i]]]
    
    # 이 시점에서 { 장르 :['장르의 재생횟수', ['노래 재생 횟수', '노래의 고유 번호']], ... } 형태로 저장됨
    
    # '1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.' 조건을 만족하기 위해서 정렬
    sorted_genres = sorted(music.items(), key = lambda x: x[1][0], reverse=True)
    result = []
    
    for _, (_, songs) in sorted_genres:
        # '2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.'
        # '3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.'
        sorted_songs = sorted(songs, key=lambda x: (-x[0], x[1])) # 위 2, 3 조건을 만족하도록 정렬
        result.extend([song[1] for song in sorted_songs[:2]])  # '장르 별로 가장 많이 재생된 노래를 두 개씩 모아'라는 조건 만족하도록 2개만 슬라이싱
    
    return result
    