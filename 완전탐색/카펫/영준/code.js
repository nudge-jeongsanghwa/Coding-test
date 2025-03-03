function solution(brown, yellow) {
  let [edge, center] = [(brown - 2) / 2, 1];

  while ((edge - 2) * center !== yellow) {
    edge -= 1;
    center += 1;
  }

  return [edge, center + 2];
}
