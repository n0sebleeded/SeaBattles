var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { gameBoard, shipList, ShowBoard, sysParams } from "./initBoard.js";
import { CellState } from "./types.js";
import { combinations } from "./combinations.js";
var localCombinations = __spreadArray([], combinations, true); // Создание локальной копии
function getDirection() {
    return Math.random() < 0.5;
}
function markSurroundingCells(x, y, gridmatrix) {
    var _loop_1 = function (i) {
        var _loop_2 = function (j) {
            if (gridmatrix[i][j].state == CellState.Empty) {
                gridmatrix[i][j] = { state: CellState.Barrier };
                if (localCombinations.some(function (arr) { return arr[0] === j && arr[1] === i; })) {
                    localCombinations = localCombinations.filter(function (item) { return !(item[0] === j && item[1] === i); });
                }
            }
        };
        for (var j = Math.max(0, x - 1); j < Math.min(sysParams.ROWS, x + 2); j++) {
            _loop_2(j);
        }
    };
    for (var i = Math.max(0, y - 1); i < Math.min(sysParams.COLS, y + 2); i++) {
        _loop_1(i);
    }
}
function setupShip(size, gridmatrix) {
    var direction = getDirection();
    var combination = localCombinations[Math.ceil(Math.random() * localCombinations.length - 1)];
    var x = combination[0];
    var y = combination[1];
    if (direction) {
        if (y >= sysParams.COLS - size) {
            var _loop_3 = function (i) {
                gridmatrix[y - i][x] = { state: CellState.Ship };
                markSurroundingCells(x, y - i, gridmatrix);
                localCombinations.filter(function (item) { return !(item[0] === x && item[1] === y - i); });
            };
            for (var i = 0; i < size; i++) {
                _loop_3(i);
            }
        }
        else {
            var _loop_4 = function (i) {
                gridmatrix[y + i][x] = { state: CellState.Ship };
                markSurroundingCells(x, y + i, gridmatrix);
                localCombinations.filter(function (item) { return !(item[0] === x && item[1] === y + i); });
            };
            for (var i = 0; i < size; i++) {
                _loop_4(i);
            }
        }
    }
    else {
        if (x >= sysParams.ROWS - size) {
            var _loop_5 = function (i) {
                gridmatrix[y][x - i] = { state: CellState.Ship };
                markSurroundingCells(x - i, y, gridmatrix);
                localCombinations.filter(function (item) { return !(item[0] === x - i && item[1] === y); });
            };
            for (var i = 0; i < size; i++) {
                _loop_5(i);
            }
        }
        else {
            var _loop_6 = function (i) {
                gridmatrix[y][x + i] = { state: CellState.Ship };
                markSurroundingCells(x + i, y, gridmatrix);
                localCombinations.filter(function (item) { return !(item[0] === x + i && item[1] === y); });
            };
            for (var i = 0; i < size; i++) {
                _loop_6(i);
            }
        }
    }
    shipList.splice(shipList.indexOf(size), 1);
    return gridmatrix;
}
var matrix = setupShip(4, gameBoard);
ShowBoard(matrix);
console.log(localCombinations);
console.log(localCombinations.length);
