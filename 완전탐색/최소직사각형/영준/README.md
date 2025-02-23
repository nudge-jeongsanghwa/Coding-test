## 풀이 방법

```js
function solution(sizes) {
  const maxSize = sizes.reduce(
    (max, cur) => {
      // 가로 세로 길이 중 큰 쪽을 왼쪽에 위치시킨다.(내림차순 정렬)
      // 오름차순 혹은 내림차순 상관 없다.
      const [w, h] = cur.sort((a, b) => b - a);

      // 기존 최댓값보다 크면 갱신한다.
      return [Math.max(max[0], w), Math.max(max[1], h)];
    },
    [0, 0]
  );

  // 두 값의 곱을 반환한다.
  return maxSize[0] * maxSize[1];
}
```

### 풀이 분석

시간 복잡도는 O(1)이다. 반복문 내부에서 정렬과 최대값 비교를 하고 있지만 값이 두 개씩이라 영향은 없다.
