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
        let opponent;

        if (board_turn === 0) {
            board = leftBoard;
            opponent = rightBoard;
            player = player1;
        }
        else if (board_turn === 1) {
            board = rightBoard;
            opponent = leftBoard;
            player = computer;
        } else { return; }

        let current_board = player.getBoard();


        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let current_box = board.querySelector(`[data-point="${i},${j}"]`);
                let opponent_box = board.querySelector(`[data-point="${i},${j}"]`);

                //ADD EVENT LISTNERS TO CURRENTLY DISPLAYED BOX AND REMOVE FROM THE UNDISPLAYED BOX
                current_box.addEventListener('click', markHit);
                opponent_box.removeEventListener('click', markHit);

                if (current_board[i][j] !== 0) {
                    current_box.textContent = "SHIP";
                    if (current_board[i][j].isSunk()) {
                        current_box.textContent = "Sunk";
                        current_box.removeEventListener('click', markHit);
                    }
                }
                else {
                    current_box.textContent = '';
                }
            }
        }
    }

    function hideShip(board_turn) {
        let board;

        if (board_turn === 1) {
            board = leftBoard;
        }
        else if (board_turn === 0) {
            board = rightBoard;
        }

        for (let child of board.childNodes) {
            child.textContent = '';
        }
    }

    function markHit(event) {
        const box = event.target ?? event;
        box.classList.add("clicked");

        if (box.textContent != "SHIP") {
            box.style.backgroundColor = "gray";
        } else {
            box.style.backgroundColor = "red";
        }

    }

    function waitForClick(board) {

        return new Promise((resolve) => {
            function handle(event) {
                let box = event.target;
                box.removeEventListener('click', handle);
                resolve(box);
            }
            board.addEventListener('click', handle);

        })
    }

    async function match() {
        createBoard();

        let current_player = 0;
        let i =0;

        do {
            if (current_player === 0) {
                hideShip(current_player);
                displayShip(current_player);
                const box = await waitForClick(rightBoard);
                current_player = 1;
                i++;
            }
            else {
                hideShip(current_player);
                displayShip(current_player);
                const box = await waitForClick(leftBoard);
                current_player = 0;
                i++;
            }
        }while(i<5)
        
    }

    match();
}

Gameplay();


