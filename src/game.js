import {Player} from './player.js';

function Gameplay() {
    const body = document.querySelector('body');

    function createBoard() {
        const leftBoard = document.querySelector('.LeftBoard');
        const rightBoard = document.querySelector('.RightBoard');
        for (let row = 0; row < 10; row++) {
            for (let column = 0; column < 10; column++) {
                const box = document.createElement('div');
                box.dataset.point = `${row},${column}`;
                leftBoard.appendChild(box);
                rightBoard.appendChild(box);
            }
        }
    }

    createBoard();
}

Gameplay();


