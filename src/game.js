import { Player } from './player.js';

function Gameplay() {
    const leftBoard = document.querySelector('#LeftBoard');
    const rightBoard = document.querySelector('#RightBoard');
    const game = new Player();
    const player1 = game.real();
    const computer = game.computer();
    const player1_attacks = [];
    const computer_attacks = [];

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
    function displayShip(board_turn) {
        let board;
        let player;

        if (board_turn === 0) {
            board = leftBoard;
            player = player1;
        }
        else if (board_turn === 1) {
            board = rightBoard;
            player = computer;
        } else { return; }

        let current_board = player.getBoard();

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (current_board[i][j] !== 0) {
                    board.querySelector(`[data-point="${i},${j}"]`).textContent = "SHIP";
                    if (current_board[i][j].isSunk()) {
                        board.querySelector(`[data-point="${i},${j}"]`).textContent = "Sunk";
                    }
                }
            }
        }
    }

    function hideShip(board_turn){
        let board;

        if (board_turn === 1) {
            board = leftBoard;
        }
        else if (board_turn === 0) {
            board = rightBoard;
        } 

        for(let child of board.childNodes){
            child.textContent = '';
        }       
    }

    function match() {
        createBoard();

        let turn = 0; //Player1

        do {
            if (checkBoardWinner === 0) { return "Player 1 wins" }
            if (checkBoardWinner === 1) { return "Player 2 wins" }

            if (turn == 0) {
                console.log("Player1's turn");

                hideShip(turn);
                displayShip(turn);
                for (let child of rightBoard.childNodes) {
                    if (!child.classList.contains("clicked")) {
                        console.log(child)
                        child.addEventListener("click", markHit);
                        child.classList.add("clicked");
                    }
                    else{
                        child.removeEventListener('click',markHit);
                    }

                }
                turn = 1;
            }
            else if (turn == 1) {
                console.log("Player2's turn");

                hideShip(turn);
                displayShip(turn);


                for (let child of leftBoard.childNodes) {
                    if (!child.classList.contains("clicked")) {
                        child.addEventListener("click", markHit);
                        child.classList.add("clicked");
                    }
                    else{
                        child.removeEventListener('click',markHit);
                    }

                }

                turn= 0;
 
            }
        } while (!checkBoardWinner())


    }

    function markHit(e) {
        let current_point = e.dataset.point;
        if (e.textContent == "SHIP") {
            e.textContent = 'X';

        }
        else {
            e.style.backgroundColor = "gray";
        }
    }


    function checkBoardWinner() {
        if (player1.checkAllSunk()) {
            return 0
        }
        if (computer.checkAllSunk()) {
            return 1
        }
    }

    function selectBox() {
        const clicked = [];

        let random_row = getRandomPoint();
        let random_column = getRandomPoint();

        if (!checkContains([random_row, random_column], clicked)) {
            clicked.push([random_row, random_column]);
            return [random_row, random_column];
        }
        else {
            return selectBox();
        }

    }

    function checkContains(arr, store) {

        let found = false;

        for (let i = 0; i < store.length; i++) {
            if (arr == store[i]) {
                found = true;
            }
        }

        return found;
    }

match();
}

Gameplay();


