/*import { matrix, matrixPlayer } from "./placeShips.js";*/
import { matrix } from "./placeShips.js";
import {CellState} from "./types";

const cells:NodeListOf<Element> = document.querySelectorAll('.board td');
const cellsSecondBoard: NodeListOf<Element> = document.querySelectorAll('.boardsec td');

cells.forEach((cell:Element, index:number):void => {
    // Получаем индекс строки и столбца на основе индекса ячейки
    const row = Math.floor(index / 10); // 10 - количество ячеек в строке
    const col = index % 10;

    const cellState: CellState = matrix[row][col].state;

    // @ts-ignore
    cell.state = cellState;

    cell.addEventListener('click', (event: Event) => {
        if (cellState == 1) {
            cell.className = "state-hit";
        }
        else {
            cell.className = "state-miss";
        }
    });
});

cellsSecondBoard.forEach((cell:Element, index:number):void => {
    // Получаем индекс строки и столбца на основе индекса ячейки
    const row = Math.floor(index / 10); // 10 - количество ячеек в строке
    const col = index % 10;

    const cellState: CellState = matrix[row][col].state;

    // @ts-ignore
    cell.className = "state-" + matrix[row][col].state;
});
