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

function legalMove(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] >= 0 && arr[0] <= 7 && arr[1] >= 0 && arr[1] <= 7) {
      return true;
    } else {
      return false;
    }
  }
}

let potential = [];

const tea = getMoves(0, 3);
for (let i = 0; i < tea.length; i++) {
  const test = legalMove(tea[i]);
  if (test === true) potential.push(tea[i]);
}

console.log(tea);
console.log(potential);
