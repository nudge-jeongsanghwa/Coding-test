## 문제 풀이

주식 가격을 관리할 `stack`을 하나 생성합니다.
`len(prices)`는 문제 풀이 시에 많이 참조하기 때문에 별도의 식별자를 만들고 할당하여 사용하였습니다.

스택에 넣는 원소는 `['시간', '주식 가격']`의 형태로 관리하였습니다.

주요 로직은 스택의 맨 위에 존재하는 값과 현재 가격을 비교하여 가격이 떨어지지 않은 경우에는 스택에 추가하고, 떨어진 경우에는 스택에서 `pop`을 해주는 것입니다. 

pop을 통하여 얻어낸 주식 정보 중 시간과 현재 시간의 차이만큼이 주식 가격이 유지된 시간이기 때문에, 이를 `answer` 배열에 저장합니다.

## Tip