import {GameBoard} from "./gameboard.js";

const Player = function (){

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

module.exports = Player;
