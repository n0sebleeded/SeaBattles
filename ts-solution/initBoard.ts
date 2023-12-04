import { Board } from "./types.js";
import { CellState } from "./types.js";
import { Cell } from "./types.js";
import {Pars} from "./types.js";

export const sysParams:Pars = {
    ROWS: 10,
    COLS: 10,
}
function CreateEmptyBoard():Board {
    const board:Board = [];
    for (let i = 0; i < sysParams.ROWS; i++) {
        const row:Cell[] = [];
        for (let j = 0; j < sysParams.COLS; j++) {
            row.push({ state:CellState.Empty } )
        }
        board.push(row);
    }
    return board
}

export function ShowBoard(board:Board):void {
    for (let i = 0; i < board.length; i++) {
        let row = '';
        for (let j = 0; j < board[i].length; j++) {
            row += `${board[i][j].state} `
        }
        console.log(row);
    }
}

export const shipList:number[] = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
export const startGameBoard = CreateEmptyBoard();
