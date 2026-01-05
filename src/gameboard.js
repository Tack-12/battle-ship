const Ship = module.require('./ship.js');

const Gameboard = function (){
    const rows = 10;
    const board = new Array(rows);
    const columns = 10;

    //initializeGameBoard with 0;
    function initializeGameBoard(){
        for(j=0; j<rows; j++){
           board[j] = new Array(columns).fill(0);
        }
    }
    
    //get the board after changes
    function getBoard(){
        return board;
    }

    function placeShip(type,row,columns){
        let ship = new Ship(type);
        let length = ship.getLength();
        let placed = false;
       
        if((row+length)<10 && checkBoard(length,row,columns)){
            let i =0;
            while(i<length){
                board[row+i][columns] = ship;
                i++;
            }
        }         
        else if((columns+ length)<10 && checkBoard(length,row,columns)){
            let i =0;
            while(i<length){
                board[row][columns+i] = ship;
                i++;
            }

        }
        else{
            console.log("Space not empty");
        }
    }

    function checkBoard(row,columns){
        if (board[row][columns] !== 0){
            return false
        }else{
            return true;
        }
    }

    return {initializeGameBoard,placeShip,getBoard};

};

const game = new Gameboard();
game.initializeGameBoard();
game.placeShip("Carrier",0,2);
game.placeShip("Submarine",0,5);

console.table(game.getBoard());
module.exports = Gameboard;
