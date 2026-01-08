import {Gameboard} from "./gameboard.js";
export const Player = function (){

    function RealPlayer(){
        const board = new GameBoard();

        return board;
    }

    function Computer(){
        const board = new GameBoard();

        return board;
    }

    return {RealPlayer , Computer}
}

