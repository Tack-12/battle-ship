const Gameboard = module.require('../gameboard.js');
const board = new Gameboard();
board.initializeGameBoard();
const expected = new Array(10).fill(new Array(10). fill(0));

//Checks if initialized array is 2D array with 0s
test('Gamebaord',()=>{
   expect(board.getBoard()).toEqual(expect.arrayContaining(expected));
})
