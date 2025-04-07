## 풀이 방법

number를 앞 자리부터 검사하면서 해당 숫자를 지울 경우, 전체 숫자가 커질 경우를 구분해야 함.
=> stack을 통하여 관리하도록 구현

```python
for num in number:
    while k > 0 and stack and stack[-1] < num:
        stack.pop()
        k -= 1
    
    stack.append(num)
```

number를 순회하면서 모든 자릿수를 stack에 append하며
아래 3가지 조건을 모두 만족할 때, stack에서 Pop을 진행.

1. k > 0: 제거해야 할 수가 남아있는 경우
2. stack이 비어있지 않은 경우
3. stack의 마지막 수가 현재 순회 중인 수보다 작은 경우

## Tip
슬라이싱을 통한 구현도 가능할 것으로 보이나 stack의 삽입 삭제가 O(n)임을 이용하는 것이 좋을 것 같음.
슬라이싱은 slice 등의 메소드가 아닌 index 등으로 관리하면 위에서 말한 성능을 보장하면서 구현 가능해보임.