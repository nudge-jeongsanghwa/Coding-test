function solution(citations) {
  const max = Math.max(...citations);
  let answer = 0;

  for (let h = max; h >= 0; h--) {
    const bigger = citations.filter((citation) => citation >= h).length;
    const smaller = citations.length - bigger;

    if (bigger >= h && smaller <= h) {
      answer = h;
      break;
    }
  }

  return answer;
}
