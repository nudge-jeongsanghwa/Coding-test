function solution(k, dungeons) {
  const goDungeon = (count, point, visited, dungeons) => {
    let maxCount = count;

    for (let i = 0, size = dungeons.length; i < size; i++) {
      const [required, consume] = dungeons[i];

      if (visited[i]) continue;
      if (point < required) continue;

      visited[i] = true;

      const newCount = goDungeon(count + 1, point - consume, visited, dungeons);

      maxCount = Math.max(maxCount, newCount);

      visited[i] = false;
    }

    return maxCount;
  };

  return goDungeon(0, k, new Array(dungeons.length).fill(false), dungeons);
}
