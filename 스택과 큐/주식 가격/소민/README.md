### 풀이 방법

- stack에 가격과 인덱스를 저장
- stack의 마지막 가격보다 더 높은 경우 앞의 주식 가격이 떨어지지 않은 것으로 판단하여 stack에 추가
- 아닌 경우 이전 주식의 가격이 떨어진 것
  - 현재의 인덱스와 이전 주식의 인덱스로 저장해 놓은 것의 차이로 이전 주식 가격 유지 기간을 계산
- for문 종료 후 stack에 남은 주식의 경우 가격이 떨어지지 않은 것으로 계속 가격이 유지된 것. 배열의 길이로 계산
