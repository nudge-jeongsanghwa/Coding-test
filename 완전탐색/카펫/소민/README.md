### 풀이 방법

- sum : width + height
  - brown = 2*width + 2*(height-2)의 공식으로 부터 2번째 라인 공식 도출
- height가 3이상이어야 갈색이 노란색의 테두리가 될 수 있어서 반복문은 3부터 시작
- sum / 2 : width가 height보다 작을 수 없어서 width >= height
