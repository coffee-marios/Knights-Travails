function getMoves(arr) {
  let x = arr[0];
  let y = arr[1];
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

function legalMove(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] >= 0 && arr[0] <= 7 && arr[1] >= 0 && arr[1] <= 7) {
      return true;
    } else {
      return false;
    }
  }
}

function store(arr = null, solution) {
  if (arr == null) return null;
  let copyArr = [...arr];
  return {
    newMove: (value) => copyArr.push(value),
  };
}

function knightPath(start, end) {}

// console.log(tea);
//console.log(potential);
console.log(knightPath([0, 3], [1, 1]));
