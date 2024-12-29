## 풀이 방법

```js
const solution = (genres, plays) => {
  const gtpMap = new Map(); // 장르별 총 재생횟수 해시맵
  const gucMap = new Map(); // 장르별 반환 곡 갯수 카운팅 해시맵

  //   장르별 총 재생횟수 계산 해서 해시 저장
  genres.forEach((v, i) => gtpMap.set(v, (gtpMap.get(v) | 0) + plays[i]));

  //   인덱스를 반환해야 하므로 인덱스 배열 생성
  return Array.from({ length: genres.length }, (_, i) => i)
    .sort((a, b) => {
      /**
       * 정렬(문제의 조건)
       * 1. 총 재생횟수가 많은 장르부터 내림차순
       * 2. 같은 장르일 경우, 재생횟수가 많은 곡부터 내림차순
       * 3. 재생횟수도 같을 경우, 번호가 작은 곡부터 오름차순
       */

      if (genres[a] !== genres[b]) {
        return gtpMap.get(genres[b]) - gtpMap.get(genres[a]);
      }

      if (plays[a] !== plays[b]) {
        return plays[b] - plays[a];
      }

      return a - b;
    })
    .filter((v) => {
      // 각 장르별로 두 개 씩만 곡을 반환 가능하므로 갯수 저장해서 필터링
      if (gucMap.get(genres[v]) === 2) {
        return false;
      }

      gucMap.set(genres[v], (gucMap.get(genres[v]) | 0) + 1);

      return true;
    });
};
```

## 효율성

동일한 값을 가진 genres와 plays 배열의 길이 값을 n으로 둔다.

정렬을 사용하므로 시간복잡도는 O(nlogn)이다.

배열의 길이는 최대 10,000이므로, 이론적으로 시간복잡도가 O(n^2)인 풀이(n = 100,000,000)까지 사용 가능하다.
