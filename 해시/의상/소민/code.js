function solution(clothes) {
  let answer = 0;
  const clothesObj = {};

  for (let i = 0; i < clothes.length; i++) {
    const [cloth, category] = clothes[i];
    clothesObj[category] = (clothesObj[category] || 0) + 1;
  }

  const sum = Object.values(clothesObj).reduce((acc, cur) => acc * (cur + 1), 1);

  return sum - 1;
}
