## 문제 풀이

1. 인자로 주어진 던전들(`dungeons`)을 탐험할 수 있는 모든 조합 구하기

2. 구한 조합을 for문으로 하나씩 순회하면서, 각 케이스 별 탐험 가능한 던전 개수 구하기

3. 2단계에서 순회할 때마다 `answer`를 탐험 가능한 최대 던전 개수로 갱신해주기

<br />

## Tip

> **순열**
> : 몇 개를 골라 순서를 고려해 나열한 경우의 수 <br />
> 즉, 서로 다른 n 개 중 r 개를 골라 순서를 정해 나열하는 가짓수

- python 에서 순열 구하는 방법

```py
import itertools

itertools.permutations(배열, 선택 개수)
```

- 예

```py
import itertools

arr = ['A', 'B', 'C']
nPr = itertools.permutations(arr, 2)

print(nPr)
# [(A, B), (A, C), (B, A), (B, C), (C, A), (C, B)]
```
