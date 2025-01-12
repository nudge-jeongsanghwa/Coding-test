## 문제 풀이 방법

첨에 문제 읽고, 완전탐색 해도 되나? 고민했음.

방법이 안 떠올라서 완전탐색(시뮬레이션)으로 했는데 시간 초과 안남.

1. 맨 왼쪽 원소가 제일 큰 우선순위면 pop 해주고, 아니면 popleft 후 맨 뒤에 append 해주는 과정을 무한 반복

2. 위 1번 과정을 언제까지 반복하냐? => `location` 에 해당하는 숫자가 가장 큰 우선순위가 되어서 pop 될 때까지

## Tip

priorities 를 가지고 만든 deque인 `q` 에 대한 `max`값, `len`값을 사용해야 하는데,

`max(priorities)`, `len(priorities)` 처럼 priorities 를 사용하는 실수들이 있었다.
