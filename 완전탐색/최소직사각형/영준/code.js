function solution(sizes) {
  const maxSize = sizes.reduce(
    (max, cur) => {
      const [w, h] = cur.sort((a, b) => b - a);

      return [Math.max(max[0], w), Math.max(max[1], h)];
    },
    [0, 0]
  );

  return maxSize[0] * maxSize[1];
}
