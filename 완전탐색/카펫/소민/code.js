function solution(brown, yellow) {
  const sum = (brown + 4) / 2;

  for (let height = 3; height <= sum / 2; height++) {
    let width = sum - height;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
