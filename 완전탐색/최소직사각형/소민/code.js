function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];
    if (w > h) {
      width = Math.max(width, w);
      height = Math.max(height, h);
    } else {
      width = Math.max(width, h);
      height = Math.max(height, w);
    }
  }

  return width * height;
}
