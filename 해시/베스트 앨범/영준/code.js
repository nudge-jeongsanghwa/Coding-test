const solution = (genres, plays) => {
  const gtpMap = new Map(); // genresTotalPlaysMap
  const gucMap = new Map(); // genresUsedCountMap

  genres.forEach((v, i) => gtpMap.set(v, (gtpMap.get(v) | 0) + plays[i]));

  return Array.from({ length: genres.length }, (_, i) => i)
    .sort((a, b) => {
      if (genres[a] !== genres[b]) {
        return gtpMap.get(genres[b]) - gtpMap.get(genres[a]);
      }

      if (plays[a] !== plays[b]) {
        return plays[b] - plays[a];
      }

      return a - b;
    })
    .filter((v) => {
      if (gucMap.get(genres[v]) === 2) {
        return false;
      }

      gucMap.set(genres[v], (gucMap.get(genres[v]) | 0) + 1);

      return true;
    });
};
