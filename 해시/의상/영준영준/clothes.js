const solution = (clothes) => {
  const cMap = new Map();

  clothes.forEach((c) => cMap.set(c[1], (cMap.get(c[1]) | 0) + 1));

  return Array.from(cMap.values()).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
};
