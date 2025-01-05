## 풀이 방법

1. 각 기능별 작업 완료까지 남은 기간을 구한다.

> 💡 `100 - (speed * 소요일정 x일) == progress`

2. 남은 기간 배열을 순회하면서, 기준점이 되는 기능과 함께 배포 가능한 뒷 기능들을 구해서 `answer`를 완성한다.

<br />

## Tip: python의 `zip()` 내장 함수

```py
numbers = [1, 2, 3]
letters = ["A", "B", "C"]
for pair in zip(numbers, letters):
    print(pair)

### 다음과 같이 출력됨 ###
# (1, 'A')
# (2, 'B')
# (3, 'C')
```

<br />

## 시간 복잡도

`O(N)`
