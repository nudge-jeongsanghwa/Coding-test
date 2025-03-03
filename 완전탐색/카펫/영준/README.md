## 풀이 방법

```js
function solution(brown, yellow) {
  // 갈색 변 중 긴 쪽의 길이를 edge, 긴 변 둘 사이에 끼게 되는 짧은 곳의 길이를 center라고 정의한다.
  // edge는 무조건 center보다 길어야 하므로 edge의 최대값(brown - 2)에서 시작한다.
  let [edge, center] = [(brown - 2) / 2, 1];

  // (edge - 2) * center는 yellow의 크기여야 하므로 그 때까지 반복한다.
  while ((edge - 2) * center !== yellow) {
    edge -= 1;
    center += 1;
  }

  return [edge, center + 2];
}
```

### 풀이 분석

최악의 경우 831번 실행하게 된다. 시간은 충분하다.

일반적으로 yellow의 가로 세로 길이를 변수로 정의하고 풀 것 같아 brown 쪽을 사용해보았다. 또한 yellow 범위가 넓기 때문에 따로 계산해서 폭을 좁히지 않는다면 brown의 값을 사용하는 쪽이 더 빠르다.
