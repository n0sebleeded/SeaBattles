import { CellState } from "./types.js";
var ROWS = 10;
var COLS = 10;
function CreateEmptyBoard() {
    var board = [];
    for (var i = 0; i < ROWS; i++) {
        var row = [];
        for (var j = 0; j < COLS; j++) {
            row.push({ state: CellState.Empty });
        }
        board.push(row);
    }
    return board;
}
export function ShowBoard(board) {
    for (var i = 0; i < board.length; i++) {
        var row = '';
        for (var j = 0; j < board[i].length; j++) {
            row += "".concat(board[i][j].state, " ");
        }
        console.log(row);
    }
}
export var gameBoard = CreateEmptyBoard();
