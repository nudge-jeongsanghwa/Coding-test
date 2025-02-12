**풀이 방법**

- 가장 맵지 않은 스코빌 지수와 두 번째로 맵지 않은 스코빌 지수를 이용하기 위해 최소힙을 이용
- 최솟값 두 개를 이용하여 새로운 스코빌 지수를 만들어 힙에 다시 추가
  - heap.remove(): 최소값을 반환하고 bubbleDown 메소드를 호출하여 나머지 값을 정렬한다.
- 가장 작은 값이 k보다 커지거나 더 이상 조합할 음식이 없을 경우 종료

---

**놓친 부분**

- 입력으로 주어지는 scoville 배열을 그냥 `heap.values=[scoville]` 형태로 할당했다. 정렬된 데이터가 들어온다는 조건이 없기 때문에 최소힙 자료구조에 맞게 각 원소를 insert로 넣어줘야 한다.

---

**시간복잡도**  
`O(NlogN)`의 시간복잡도를 가진다.

- 삽입과 삭제 모두 힙의 높이(이진 트리의 높이)만큼 연산하는 경우가 최악의 경우 `O(logN)`
- while문은 최대 n-1만큼 반복
