## 풀이 방법

문제 설명에서 '뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.'라는 조건이 있어 해당 문제 풀이에는 큐(queue)를 사용하여 문제를 풀이하였습니다.

문제 풀이는 아래 2가지 단계로 나눠서 볼 수 있습니다.

1. `for` 루프를 이용한 큐 초기화 작업

```python
for i in range(len(progresses)):
    task_queue.append([progresses[i], speeds[i]])
```

각 작업의 진도와 속도를 원소로 갖는 1차원 배열을 큐에 하나씩 집어넣습니다.

2. `while` 루프를 이용한 작업 처리

```python
    while len(task_queue):
        rest = math.ceil((100 - task_queue[0][0]) / task_queue[0][1])
        cnt = 0

        while (len(task_queue) and task_queue[0][0] + rest * task_queue[0][1] >= 100):
            cnt += 1
            task_queue.popleft()

        answer.append(cnt)
```

- 외부 `while`: 작업이 모두 처리될 떄(큐가 비어있을 때)까지 반복합니다.
- 내부 `while`: 현재 배포 가능한 작업들을 처리합니다. 뒤에 있는 기능들이 앞 기능과 함께 배포되는 경우에 대한 처리들입니다.

시간복잡도는 각 단계별로 `O(n)`만큼의 시간이 소요되어 총 시간 복잡도 역시 `O(n)`입니다.

## Tip
