function getMoves(oneArray) {
  let x = oneArray[0];
  let y = oneArray[1];
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
  if (arr[0] >= 0 && arr[0] <= 7 && arr[1] >= 0 && arr[1] <= 7) {
    return true;
  } else {
    return false;
  }
}

function store(arr = null) {
  if (arr.length == 10) return null;
  if (arr == null) return null;
  let myRoute;
  if (Array.isArray(arr[0])) {
    myRoute = [...arr];
  } else {
    myRoute = [[...arr]];
  }

  //console.log(myRoute, "myRoute");
  return {
    getArr: () => myRoute,
    newMove: (value) => myRoute.push(value),
  };
}

function compare(arr) {
  let optimal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= optimal.length) {
      optimal = arr[i];
    }
  }
  return optimal;
}

function knightPath(start, end) {
  if (start[0].toString() == end.toString()) {
    return [start];
  }

  let pathsToVictory = [];
  let mySolution = null;
  let startingPoint = store(start, end);

  function repeat(arr, solution) {
    let ind = arr.length - 1;
    let options = getMoves(arr[ind]);

    if (arr[ind].toString() === solution.toString()) {
      mySolution = arr;
      pathsToVictory.push(mySolution);

      return null;
    }

    for (let i = 0; i < options.length; i++) {
      let checkLegal = legalMove([...options[i]]);

      if (checkLegal == false) {
        continue;
      } else {
        let newPath = store(arr, end);
        if (newPath == null) continue;
        let allMoves = newPath.getArr();
        if (allMoves.length > 6) continue;

        newPath.newMove([...options[i]]);

        let rome = repeat(allMoves, end);
        if (rome == null) continue;
      }
    }
  }

  let first = [...startingPoint.getArr()];

  repeat(first, end);
  let final = compare([...pathsToVictory]);
  let numberMoves = final.length - 1;

  const Message =
    numberMoves > 1
      ? `You've made it in ${numberMoves} moves!`
      : `You've made it in ${numberMoves} move!`;
  console.log(Message);
  for (let i = 0; i <= numberMoves; i++) {
    console.log(final[i]);
  }
}

knightPath([5, 1], [7, 0]);
