## 풀이 방법

```js
function solution(k, dungeons) {
  // 1. 재귀 함수를 만든다.
  // count: 현재 시점에 방문한 던전 수
  // point: 현재 시점에 남은 피로도
  // visited: 던전별 방문 여부 배열
  // dungeons: 던전 피로도 정보
  const goDungeon = (count, point, visited, dungeons) => {
    let maxCount = count;

    for (let i = 0, size = dungeons.length; i < size; i++) {
      const [required, consume] = dungeons[i];

      if (visited[i]) continue;
      if (point < required) continue;

      visited[i] = true;

      // 2. 재귀적으로 방문한 던전의 최대 개수를 구한다.
      const newCount = goDungeon(count + 1, point - consume, visited, dungeons);

      // 3. 현재 시점에 방문 가능한 던전의 최대 개수를 갱신한다.
      maxCount = Math.max(maxCount, newCount);

      visited[i] = false;
    }

    // 4. 현재 시점에 방문 가능한 던전의 최대 개수를 반환한다.
    return maxCount;
  };

  // 5. 재귀함수를 실행한다.
  return goDungeon(0, k, new Array(dungeons.length).fill(false), dungeons);
}
```
