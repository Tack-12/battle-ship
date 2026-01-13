import { Gameboard } from "./gameboard.js";
export const Player = function () {

    function real() {
        const board1 = new Gameboard();
        board1.initializeGameBoard();
        board1.placeShip("Carrier", [3, 0], [3, 5])
        board1.placeShip("Battleship", [0, 7], [4, 7])
        board1.placeShip("Destroyer", [6, 3], [6, 6])
        board1.placeShip("Submarine", [7, 0], [9, 0])
        board1.placeShip("Patrol", [1, 3], [1, 4])
        return board1;
        
    }

    function computer() {
        const baord2 = new Gameboard();
        baord2.initializeGameBoard();
        baord2.placeShip("Carrier", [4, 5], [9, 5])
        baord2.placeShip("Battleship", [0, 1], [0, 5])
        baord2.placeShip("Destroyer", [2, 8], [5, 8])
        baord2.placeShip("Submarine", [7, 1], [7, 3])
        baord2.placeShip("Patrol", [9, 8], [9, 9])

       return baord2;
    }

    return { real, computer }
}

function getRandomPoint(){
    return Math.floor(Math.random()*10);
}
