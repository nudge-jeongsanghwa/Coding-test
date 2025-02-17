function solution(numbers) {
  return numbers
    .map((n) => n.toString())
    .sort((a, b) => {
      if (a + b < b + a) return 1;

      return -1;
    })
    .join("")
    .replace(/^0+/, "0");
}
