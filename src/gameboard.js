const Ship = module.require('./ship.js');

const Gameboard = function (){
    const rows = 10;
    const board = new Array(rows);
    const columns = 10;

    //initializeGameBoard with 0;
    function initializeGameBoard(){
        for(let j=0; j<rows; j++){
           board[j] = new Array(columns).fill(0);
        }
    }
    
    //get the board after changes
    function getBoard(){
        return board;
    }

    //function to place the ship from a point 
    function placeShip(type,start,end){
        let ship = new Ship(type);
        let length = ship.getLength();
        let placed = false;
        const row_index =0
        const column_index =1;
        let direction; // 0-> ROW , 1-> COLUMN
       
        if(start[row_index] === end[row_index]){
            direction = 1; 
            if(((end[column_index]-start[column_index]) == length) && checkBoard(start,end,direction)){
                let temp_col = start[1];
                let temp_row = start[0]
                while (temp_col < end[1]){
                    board[temp_row][temp_col] = ship;
                    temp_col ++;
                }

            }
            else{
                 console.log("Not Empty");
            }
        }
        else if(start[column_index] === end[column_index]){
            direction = 0;
            if(((end[row_index]-start[row_index]) == length) && checkBoard(start,end,direction)){
                let temp_col = start[1];
                let temp_row = start[0]
                while (temp_row < end[0]){
                    board[temp_row][temp_col] = ship;
                    temp_row ++;
                }

            }
            else{
                console.log("Not Empty");
            }
        }
    }

    function checkBoard(start,end,direction){
        let empty = true;
        //Check Row:
        if(direction === 0){
            let column_index = start[1];
            let row_index = start[0];
            while(row_index <= end[0]){
                if(board[row_index][column_index] !== 0){
                    empty = false;
                    break;
                }
                row_index++;
            }
        }
        else if(direction === 1){
            let row_index = start[0];
            let column_index = start[1];            

            while(column_index <= end[1]){
                if(board[row_index][column_index] !== 0){
                    empty = false;
                    break;
                }
                column_index++;
            }
        }
       return empty; 
       
    }

    return {initializeGameBoard,placeShip,getBoard};

};

module.exports = Gameboard;
