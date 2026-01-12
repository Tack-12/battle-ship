import { Player } from './player.js';

function Gameplay(){ 
    const leftBoard = document.querySelector('#LeftBoard');
    const rightBoard = document.querySelector('#RightBoard');
    const game = new Player();
    const player1 = game.real();
    const computer = game.computer();


    function createBoard() {
        for (let row = 0; row < 10; row++) {
            for (let column = 0; column < 10; column++) {
                let left_box = document.createElement('div');
                let right_box = document.createElement('div');
                left_box.dataset.point = `${row},${column}`;
                right_box.dataset.point = `${row},${column}`;
                leftBoard.appendChild(left_box);
                rightBoard.appendChild(right_box);
            }
        }
    }

    //Which board to show the position of the ships: (0 = Left Board && 1 = Right Board)
    function displayShip(board_turn){
        let board;
        let player;

        if (board_turn === 0){
           board = leftBoard; 
           player = player1; 
        }
        else if (board_turn === 1){
            board = rightBoard;
            player = computer;
        }else{ return ;}

        let current_board = player.getBoard();

        for(let i=0; i<10 ; i++){
            for (let j=0; j<10; j++){
                if(current_board[i][j] !== 0){
                    board.querySelector(`[data-point="${i},${j}"]`).textContent = "SHIP";
                }
            }
        }
        
    }

    createBoard();
    displayShip(0);
    displayShip(1);
   
}



Gameplay();


