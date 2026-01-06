//jest Mock of Ship (Returning mocked length);

jest.mock('../ship.js',()=>{
   return jest.fn().mockImplementation((type)=>{
      const originalModule = jest.requireActual('../ship.js');

      return{
        ...originalModule,
        getLength: jest.fn(() => {
            if(type == "Carrier") {return 5;}
            if(type == "Submarine") {return 2;}
        }),
      };
   });
});

//Basic required initialization of variables:
const Ship = module.require('../ship.js');
const Gameboard = module.require('../gameboard.js');
const board = new Gameboard();

//Before each test
beforeEach(()=>{
   board.initializeGameBoard();
})

//Test the return of gameboard
test("If GameBoard returns the board" , ()=>{
   expect(board.getBoard()).toBeInstanceOf(Object);
});

//Test if the board has inserted the Vertical Ship
test("If GameBoard inserts an instance of ship at given Position Vertically", ()=>{
   board.placeShip("Carrier",[0,0],[0,5]);
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
test("If GameBoard inserts an instance of ship at given Position Horizontally", ()=>{
   board.placeShip("Submarine",[1,2],[3,2]);
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



