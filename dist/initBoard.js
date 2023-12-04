import { CellState } from "./types.js";
export var sysParams = {
    ROWS: 10,
    COLS: 10,
};
function CreateEmptyBoard() {
    var board = [];
    for (var i = 0; i < sysParams.ROWS; i++) {
        var row = [];
        for (var j = 0; j < sysParams.COLS; j++) {
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
export var shipList = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
export var startGameBoard = CreateEmptyBoard();
