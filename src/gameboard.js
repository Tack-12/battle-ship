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

    //function to place the ship from a point 
    function placeShip(type,row,colums){
        let ship = new Ship(type);
        let length = ship.getLength();
        let placed = false;
        const direction = Math.floor(Math.random()*2); // Returns 0(Horizontal) or  1(Vertical);
       
        if(direction == 0 && (row+length)<10&& checkBoard(length,row,columns,direction)){
                let i =0;
                while(i<length){
                    board[row+i][columns] = ship;
                    i++;
                }
        }
        else if (direction == 1 && (columns+length)<10 && checkBoard(length,row,columns,direction)){
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

    function checkBoard(length,row,columns,direction){
        let empty = false;
        let i=0;
        if(direction == 0){
            while(i< length){
                if (board[row][columns+i] !== 0){
                    empty = false;
                    break;
                    i++;
                }
                else{
                    empty =true;
                    i++;
                }
            }
        }
        else{
            while(i< length){
                if (board[row+1][columns] !== 0){
                    empty = false;
                    break;
                    i++;
                }
                else{
                    empty =true;
                    i++;
                }
            }
        }

        return empty;
    }

    return {initializeGameBoard,placeShip,getBoard};

};

const game = new Gameboard();
game.initializeGameBoard();
game.placeShip("Carrier",0,2);
game.placeShip("Submarine",0,5);

console.table(game.getBoard());
module.exports = Gameboard;
