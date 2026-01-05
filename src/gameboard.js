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
       
        if((length+row) < 9 && (length-row)>9 ){
            
        }

         
    }

};

//Return a random number from 0-9:
function randomPoint(){
    return Math.floor(Math.random(10));
}

module.exports = Gameboard;
