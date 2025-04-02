function solution(n, lost, reserve) {
  // 여벌 체육복을 가져온 학생이 체육복을 도난당한 경우 제외
  const lostSet = new Set(lost.filter((x) => !reserve.includes(x)));
  const reserveSet = new Set(reserve.filter((x) => !lost.includes(x)));

  let answer = n - lostSet.size; // 기본적으로 체육복 있는 학생 수

  [...lostSet]
    .sort((a, b) => a - b)
    .forEach((student) => {
      // 앞 또는 뒤 번호의 학생이 여벌 체육복을 가지고 있는 경우 +1
      // 빌려준 번호의 학생은 다시 빌려줄 수 없어서 delete
      if (reserveSet.has(student - 1)) {
        reserveSet.delete(student - 1);
        answer++;
      } else if (reserveSet.has(student + 1)) {
        reserveSet.delete(student + 1);
        answer++;
      }
    });

  return answer;
}
