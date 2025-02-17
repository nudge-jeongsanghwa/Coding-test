function solution(citations) {
  const hList = [];

  citations.forEach((c) => {
    for (let h = 1; h <= c; h++) {
      if (!hList[h]) hList[h] = 1;
      else hList[h]++;
    }
  });

  return hList
    .map((v, h) => [h, v])
    .filter(([h, v]) => h <= v)
    .reduce((acc, [h, v]) => (acc < h ? h : acc), 0);
}
