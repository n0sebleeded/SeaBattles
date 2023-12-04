import { gameBoard, shipList, ShowBoard, sysParams } from "./initBoard.js";
import { CellState } from "./types.js";
import { combinations } from "./combinations.js";
function getDirection() {
    return Math.random() < 0.5;
}
function setupShip(size, gridmatrix) {
    var direction = getDirection();
    var combination = combinations[Math.ceil(Math.random() * 100 - 1)];
    var x = combination[0];
    var y = combination[1];
    if (direction) {
        if (y >= sysParams.COLS - size) {
            for (var i = 0; i < size; i++) {
                gridmatrix[y - i][x] = { state: CellState.Ship };
            }
        }
        else {
            for (var i = 0; i < size; i++) {
                gridmatrix[y + i][x] = { state: CellState.Ship };
            }
        }
    }
    else {
        if (x >= sysParams.ROWS - size) {
            for (var i = 0; i < size; i++) {
                gridmatrix[y][x - i] = { state: CellState.Ship };
            }
        }
        else {
            for (var i = 0; i < size; i++) {
                gridmatrix[y][x + i] = { state: CellState.Ship };
            }
        }
    }
    shipList.splice(size, 1);
    return gridmatrix;
}
var matrix = setupShip(4, gameBoard);
ShowBoard(matrix);
