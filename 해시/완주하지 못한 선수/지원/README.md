## 풀이 방법

선수들 중 동명이인이 있다는 사실을 고려하여
선수의 이름을 key, 참여한 선수의 수를 value로 갖는 딕셔너리를 하나 생성

participant를 순회하여 딕셔너리를 초기화 해준 뒤, completion을 순회하며 완주한 사람의 key를 바탕으로 value를 1씩 차감. 차감하여 value가 0이 되면 `del`을 이용하여 딕셔너리에서 삭제

완주하지 못한 사람은 1명뿐이라고 했으니 key 배열을 가져온 뒤 0번째 원소에 있는 것을 정답으로 반환

## Tip

participant와 completion을 정렬한 뒤, 다른 경우를 반환하는 경우도 직관적인 풀이가 가능할 것 같음(다만, 이번 알고리즘 분류가 해시여서 딕셔너리로 풀이)

```python
def solution(participant, completion):
    participant.sort()
    completion.sort()

    total = len(participant)

    for i in range(total - 1):
        if (participant[i] != completion[i]):
            return participant[i]

    # 리스트의 마지막 원소에 해당하는 선수가 완주하지 못한 경우 return
    return participant[total - 1]
```
