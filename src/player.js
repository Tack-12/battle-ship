import { Gameboard } from "./gameboard.js";
export const Player = function () {
  function real() {
    const board1 = new Gameboard();
    board1.initializeGameBoard();
    placeShiponBoard(board1);
    return board1;
  }

  function computer() {
    const baord2 = new Gameboard();
    baord2.initializeGameBoard();
    baord2.placeShip("Carrier", [4, 5], [9, 5]);
    baord2.placeShip("Battleship", [0, 1], [0, 5]);
    baord2.placeShip("Destroyer", [2, 8], [5, 8]);
    baord2.placeShip("Submarine", [7, 1], [7, 3]);
    baord2.placeShip("Patrol", [9, 8], [9, 9]);

    return baord2;
  }

  function placeShiponBoard(board) {
    const shipNames = [
      "Carrier",
      "Battleship",
      "Destroyer",
      "Submarine",
      "Patrol",
    ];

    shipNames.forEach((ship) => {
      let placed;
      do {
        let ship_info = randomPlacement(ship);
        placed = board.placeShip(ship_info.name, ship_info.start, ship_info.end);
      } while (!placed);
    });
  }

  function randomPlacement(ship) {
    let random_choice = Math.floor(Math.random() * 2);
    let row = getRandomPoint(10);
    let column = getRandomPoint(10);

    let length;

    if (ship === "Carrier") length = 5;
    if (ship === "Battleship") length = 4;
    if (ship === "Destroyer") length = 3;
    if (ship === "Submarine") length = 2;
    if (ship === "Patrol") length = 1;

    if (random_choice === 0) {
      if (getDirection()) {
        return {
          name: ship,
          start: [row, column],
          end: [row, column + length],
        };
      } else {
        return {
          name: ship,
          start: [row, column],
          end: [row, column - length],
        };
      }
    } else {
      if (getDirection()) {
        return {
          name: ship,
          start: [row, column],
          end: [row + length, column],
        };
      } else {
        return {
          name: ship,
          start: [row, column],
          end: [row - length, column],
        };
      }
    }
  }
  return { real, computer, randomPlacement };
};

function getDirection() {
  let direc = getRandomPoint(2);
  if (direc === 0) {
    return true;
  } else {
    return false;
  }
}

function getRandomPoint(x) {
  return Math.floor(Math.random() * x);
}

