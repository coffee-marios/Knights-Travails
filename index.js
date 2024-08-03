function getMoves(x, y) {
  let posUpLeft = [x - 1, y + 2];
  let posUpRight = [x + 1, y + 2];
  let posLeftUp = [x - 2, y + 1];
  let posLeftBottom = [x - 2, y - 1];
  let posRightUp = [x + 2, y + 1];
  let posRightBottom = [x + 2, y - 1];
  let posBottomLeft = [x - 1, y - 2];
  let posBottomRight = [x + 1, y - 2];
  return [
    posUpLeft,
    posUpRight,
    posLeftUp,
    posLeftBottom,
    posRightUp,
    posRightBottom,
    posBottomLeft,
    posBottomRight,
  ];
}

const tea = getMoves(3, 3);
console.log(tea);
