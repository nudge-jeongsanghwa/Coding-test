## 풀이 방법

```js
function solution(citations) {
  const hList = [];

  // 각각 1부터 c(인용횟수)까지 인덱스가 가진 값에 1을 더해준다.
  citations.forEach((c) => {
    for (let h = 1; h <= c; h++) {
      if (!hList[h]) hList[h] = 1;
      else hList[h]++;
    }
  });

  return (
    hList
      .map((v, h) => [h, v])
      // 인덱스 h(인용횟수)보다 값 v(논문 편수)가 크거나 같은 경우만 남긴다.
      .filter(([h, v]) => h <= v)
      // 가장 큰 인덱스 h(인용횟수)를 반환한다.
      .reduce((acc, [h, v]) => (acc < h ? h : acc), 0)
  );
}
```

### 풀이 분석

논문의 편수를 n, 각 논문별 인용 횟수를 m이라고 할 때, 시간복잡도는 O(nm)이다. 10,000,000은 1억보다 작으므로 시간은 충분하다.

## 이건 뭐지?

```js
function solution(citations) {
  citations = citations.sort(sorting);
  var i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;

  function sorting(a, b) {
    return b - a;
  }
}
```

이런 풀이를 발견했는데 대체 어떤 원리인지 모르겠다...
