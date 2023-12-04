import {gameBoard, shipList, ShowBoard, sysParams} from "./initBoard.js";
import {Board, CellState} from "./types.js";
import {combinations} from "./combinations.js";

let localCombinations = [...combinations]; // Создание локальной копии

function getDirection():boolean {
    return Math.random() < 0.5;
}

function markSurroundingCells(x:number, y:number, gridmatrix:Board):void {
    for (let i = Math.max(0, y - 1); i < Math.min(sysParams.COLS, y + 2); i++) {
        for (let j = Math.max(0, x - 1); j < Math.min(sysParams.ROWS, x + 2); j++) {
            if (gridmatrix[i][j].state == CellState.Empty) {
                gridmatrix[i][j] = { state: CellState.Barrier }
                if (localCombinations.some(arr => arr[0] === j && arr[1] === i)) {
                    localCombinations = localCombinations.filter(item => !(item[0] === j && item[1] === i));
                }
            }
        }
    }
}

function setupShip(size:number, gridmatrix:Board):Board {
    let direction:boolean = getDirection();
    let combination:number[] = localCombinations[Math.ceil(Math.random() * localCombinations.length - 1)];
    let x:number = combination[0];
    let y:number = combination[1];

    if (direction) {
        if (y >= sysParams.COLS - size) {
            for (let i = 0; i < size; i++) {
                gridmatrix[y - i][x] = { state: CellState.Ship };
                markSurroundingCells(x, y - i, gridmatrix)
                localCombinations.filter(item => !(item[0] === x && item[1] === y - i));
            }
        }
        else {
            for (let i = 0; i < size; i++) {
                gridmatrix[y + i][x] = { state: CellState.Ship };
                markSurroundingCells(x, y + i, gridmatrix)
                localCombinations.filter(item => !(item[0] === x && item[1] === y + i));
            }
        }
    }
    else {
        if (x >= sysParams.ROWS - size) {
            for (let i = 0; i < size; i++) {
                gridmatrix[y][x - i] = { state: CellState.Ship };
                markSurroundingCells(x - i, y, gridmatrix)
                localCombinations.filter(item => !(item[0] === x - i && item[1] === y));
            }
        }
        else {
            for (let i = 0; i < size; i++) {
                gridmatrix[y][x + i] = { state: CellState.Ship };
                markSurroundingCells(x + i, y, gridmatrix)
                localCombinations.filter(item => !(item[0] === x + i && item[1] === y));
            }
        }
    }
    shipList.splice(shipList.indexOf(size), 1);
    return gridmatrix;
}


let matrix:Board = setupShip(4, gameBoard);
ShowBoard(matrix);
console.log(localCombinations);
console.log(localCombinations.length);