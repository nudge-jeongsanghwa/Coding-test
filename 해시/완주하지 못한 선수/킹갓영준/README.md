## 풀이 방법

참가자 정보를 해시맵에 저장

participant 배열을 순회하며 각 참가자의 이름을 key로, 등장 횟수를 value로 갖는 해시맵(pMap)을 생성합니다.
참가자가 처음 등장하면 1을 할당하고, 이미 등장한 경우 1을 더합니다.
완주자 정보를 기반으로 해시맵 업데이트

completion 배열을 순회하며, 완주한 참가자의 이름에 해당하는 해시맵 값(value)을 1 감소시킵니다.
완주하지 못한 참가자 찾기

pMap의 키(key)들을 순회하며, 값(value)이 0보다 큰 참가자를 찾습니다.
값이 0보다 크다는 것은 해당 참가자가 완주 명단에 없거나, 명단보다 더 많이 참가했음을 의미합니다.
결과 반환

값이 0보다 큰 첫 번째 참가자의 이름을 반환합니다.

## Tip
reduce와 forEach를 적절히 활용하여 간결하게 구현되었습니다.
이 코드의 시간복잡도는 O(n)으로, participant와 completion 배열을 각각 한 번씩 순회하므로 효율적입니다.
Object.keys와 find를 활용해 해시맵에서 조건을 만족하는 참가자를 찾습니다.