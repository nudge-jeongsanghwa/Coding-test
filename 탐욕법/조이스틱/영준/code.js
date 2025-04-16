function solution(name) {
  const aCode = "A".charCodeAt(0);
  const zCode = "Z".charCodeAt(0);

  const yCursorMoveList = name.split("").map((v) => {
    const code = v.charCodeAt(0);

    const upperGap = code - aCode;
    const lowerGap = zCode - code + 1;

    return Math.min(upperGap, lowerGap);
  });

  const checkList = Array.from({ length: name.length }, (_, i) => {
    if (i === 0) return true;
    if (yCursorMoveList[i] === 0) return true;
    return false;
  });

  const checkMax = checkList.filter((v) => !v).length;

  let xCursorMove = 400;

  const getXCursorMove = (current, count, depth) => {
    if (depth === checkMax) {
      xCursorMove = Math.min(xCursorMove, count);
      return;
    }

    for (let i = 0; i < checkList.length; i++) {
      if (checkList[i]) continue;

      const cursorGap = Math.abs(i - current);
      const cursorGapOpposite = checkList.length - cursorGap;
      const cursorMinGap = Math.min(cursorGap, cursorGapOpposite);

      checkList[i] = true;
      getXCursorMove(i, count + cursorMinGap, depth + 1);
      checkList[i] = false;
    }
  };

  getXCursorMove(0, 0, 0);

  // 최솟값을 반환한다.
  return xCursorMove + yCursorMoveList.reduce((acc, cur) => acc + cur);
}
