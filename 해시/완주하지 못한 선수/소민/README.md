## 풀이 방법

Map의 key에 선수 이름을, value에 참가 / 완주 여부를 저장한다.

participant 배열을 map으로 순회하며 참가한 사람의 name을 key로 1을 설정한다. **동명 이인이 존재하는 경우 value가 동명이인의 수가 된다.**

completion 배열을 map으로 순회하며 완주한 사람의 name에 해당하는 value를 -1한다.

Map value가 0이면 해당 이름을 가진 사람은 완주한 것으로 판단한다. pMap을 for of로 순회하며 value가 0 이상인 값을 찾는다.

## Tip

동명이인의 수만큼 value를 +, -하기 때문에 마지막 연산에서 동명이인의 유무에 대해 파악할 필요 없이 value가 0이 아닌 경우만 판단하면 된다.
