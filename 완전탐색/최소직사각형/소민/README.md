### 풀이 방법

- 가로, 세로를 돌릴 수 있어서 [가로, 세로]로 주어지는 값 중 큰 값은 큰 값끼리, 작은 값은 작은 값끼리 비교한다.
  ex) [1, 2] [4, 3]으로 주어질 경우 1과 3 / 2와 4를 비교한다 .  
  &nbsp;

- 다른 풀이 방법

  - 큰 값, 작은 값을 for문 안에서 비교하지 않고 가로, 세로 중 큰 값이 [0]번째에 오도록 정렬 후 가장 큰 값을 구한다.

    ```js
    function solution(sizes) {
      const sorted = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

      const max = [0, 0];

      for (let i = 0; i < sorted.length; i++) {
        const [w, h] = sorted[i];
        max[0] = Math.max(max[0], w);
        max[1] = Math.max(max[1], h);
      }

      return max[0] * max[1];
    }
    ```
