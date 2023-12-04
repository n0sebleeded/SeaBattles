import {gameBoard, shipList, ShowBoard, sysParams} from "./initBoard.js";
import {Board, CellState} from "./types.js";
import {combinations} from "./combinations.js";

function getDirection():boolean {
    return Math.random() < 0.5;
}

function setupShip(size:number, gridmatrix:Board):Board {
    let direction:boolean = getDirection();
    let combination:number[] = combinations[Math.ceil(Math.random() * 100 - 1)];
    let x:number = combination[0];
    let y:number = combination[1];

    if (direction) {
        if (y >= sysParams.COLS - size) {
            for (let i = 0; i < size; i++) {
                gridmatrix[y - i][x] = { state: CellState.Ship }
            }
        }
        else {
            for (let i = 0; i < size; i++) {
                gridmatrix[y + i][x] = { state: CellState.Ship }
            }
        }
    }
    else {
        if (x >= sysParams.ROWS - size) {
            for (let i = 0; i < size; i++) {
                gridmatrix[y][x - i] = { state: CellState.Ship }
            }
        }
        else {
            for (let i = 0; i < size; i++) {
                gridmatrix[y][x + i] = { state: CellState.Ship }
            }
        }
    }
    shipList.splice(size, 1);
    return gridmatrix;
}


let matrix:Board = setupShip(4, gameBoard);
ShowBoard(matrix);