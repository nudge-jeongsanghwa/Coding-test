function solution(n, lost, reserve) {
  const students = new Array(n).fill(1);

  lost.forEach((i) => (students[i - 1] = 0));
  reserve.forEach((i) => students[i - 1]++);

  students.forEach((v, i, arr) => {
    if (v > 0) return;

    if (arr[i - 1] > 1) {
      arr[i - 1]--;
      arr[i]++;
      return;
    }

    if (arr[i + 1] > 1) {
      arr[i + 1]--;
      arr[i]++;
      return;
    }
  });

  return students.reduce((acc, cur) => (cur > 0 ? acc + 1 : acc), 0);
}
