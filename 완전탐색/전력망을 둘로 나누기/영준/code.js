function solution(n, wires) {
  const wireMap = new Map();
  let minDiff = n;

  wires.forEach(([v1, v2]) => {
    wireMap.set(v1, (wireMap.get(v1) || []).concat([v2]));
    wireMap.set(v2, (wireMap.get(v2) || []).concat([v1]));
  });

  const bfs = (v, visited, banned) => {
    const nextList = wireMap.get(v);
    const [bv1, bv2] = banned;

    let count = 1;
    visited[v] = true;

    for (let i = 0, size = nextList.length; i < size; i++) {
      const nv = nextList[i];

      if (v === bv1 && nv === bv2) continue;
      if (v === bv2 && nv === bv1) continue;
      if (visited[nv]) continue;

      visited[nv] = true;

      count += bfs(nv, visited, banned);
    }

    return count;
  };

  wires.forEach((wire) => {
    const c1 = bfs(1, new Array(n + 1).fill(false), wire);
    const c2 = n - c1;

    minDiff = Math.min(minDiff, Math.abs(c1 - c2));
  });

  return minDiff;
}
