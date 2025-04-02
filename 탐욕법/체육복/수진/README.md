## 문제 풀이

1.  n 돌면서 students[num] = 1 로 초기화 (학생이 모두 1개의 체육복 가지고 있음)

2.  lost 돌면서 students[num] = 0 으로 초기화 (해당 학생은 체육복 없음, 0개)

3.  reserve 돌면서 students[num] 에 + 1 해주기
4.  n 돌면서 students[num-1], students[num+1] 학생이 빌려줄 수 있으면 빌려줌

    -> 경우의 수를 생각해봤는데 항상 students[num+1]보다 students[num-1]를 먼저 고려해도 됨

5.  students 돌면서 1개 이상의 체육복 갖고 있는 학생 수 구하고 리턴
