## 풀이 방법

```js
function solution(n, wires) {
  // 1. 계산하기 편하게 각 송전탑 별로 연결된 송전탑 번호 맵으로 변환한다.
  const wireMap = new Map();

  wires.forEach(([v1, v2]) => {
    wireMap.set(v1, (wireMap.get(v1) || []).concat([v2]));
    wireMap.set(v2, (wireMap.get(v2) || []).concat([v1]));
  });

  // 2. 최소값을 구하기 위한 변수를 선언한다. 최대값은 n이므로 n으로 초기화한다.
  let minDiff = n;

  // 3. 연결된 송전탑의 개수를 구하기 위한 bfs 함수를 선언한다.
  const bfs = (v, visited, banned) => {
    const nextList = wireMap.get(v);
    const [bv1, bv2] = banned;

    let count = 1;
    visited[v] = true;

    for (let i = 0, size = nextList.length; i < size; i++) {
      const nv = nextList[i];

      if (v === bv1 && nv === bv2) continue;
      if (v === bv2 && nv === bv1) continue;
      if (visited[nv]) continue;

      visited[nv] = true;

      count += bfs(nv, visited, banned);
    }

    return count;
  };

  // 4. 전선 정보를 순회하며 해당 전선이 잘렸을 경우를 계산한다.
  wires.forEach((wire) => {
    // 4-1. bfs로 각 전력망이 가진 송전탑 개수를 구한다.
    const c1 = bfs(1, new Array(n + 1).fill(false), wire);
    const c2 = n - c1;

    // 4-2. 송전탑 개수의 차이를 구한 뒤 최소값을 갱신한다.
    minDiff = Math.min(minDiff, Math.abs(c1 - c2));
  });

  return minDiff;
}
```
