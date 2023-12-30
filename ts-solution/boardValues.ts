import {matrix, matrixPlayer} from "./placeShips.js";
import {CellState} from "./types";
import {getCombination} from "./combinations.js";

const cells:NodeListOf<Element> = document.querySelectorAll('.board td');
const cellsSecondBoard: NodeListOf<Element> = document.querySelectorAll('.boardsec td');
let playerCanAttack = true;

let GAME:boolean = true;
let DESTROYED_SHIPS_PLAYER_COUNT:number = 0;
let DESTROYED_SHIPS_BOT_COUNT:number = 0;
const ALL_SHIPS_DESTROYED:number = 20;
let combinations:number[][] = getCombination();

const clickHandler = (event: Event) => {
    if (GAME) {
        const clickedCell = event.target as Element;
        const index = Array.from(cells).indexOf(clickedCell);
        const row = Math.floor(index / 10);
        const col = index % 10;
        const cellState: CellState = matrix[row][col].state;

        if (cellState === 1) {
            clickedCell.className = "state-hit";
            DESTROYED_SHIPS_PLAYER_COUNT++;
        } else {
            clickedCell.className = "state-miss";
        }

        cells.forEach((cell) => {
            cell.removeEventListener('click', clickHandler);
        });

        playerCanAttack = false;
        // Bot's turn
        setTimeout(() => {
            const randCombination:number[] = combinations[Math.floor(Math.random() * (combinations.length - 1))];
            let randRow:number = randCombination[0];
            let randCol:number = randCombination[1];
            combinations = combinations.filter(item => !(item[0] === randRow && item[1] === randCol));

            const botCell = cellsSecondBoard[randRow * 10 + randCol];
            const botCellState = matrixPlayer[randRow][randCol].state;

            if (botCellState === 1) {
                botCell.className = "state-hit";
                DESTROYED_SHIPS_BOT_COUNT++;
            } else {
                botCell.className = "state-miss";
            }

            // Player can attack again after bot's turn
            playerCanAttack = true;
            cells.forEach((cell) => {
                if (playerCanAttack) {
                    cell.addEventListener('click', clickHandler);
                }
            });
        }, 500);
        if (DESTROYED_SHIPS_PLAYER_COUNT === ALL_SHIPS_DESTROYED) {
            GAME = false;
            alert("You win!")
        }
        if (DESTROYED_SHIPS_BOT_COUNT === ALL_SHIPS_DESTROYED) {
            GAME = false;
            alert("You lose :(")
        }
    }
};

cells.forEach((cell:Element):void => {
    if (playerCanAttack) {
        cell.addEventListener('click', clickHandler);
    }
});

cellsSecondBoard.forEach((cell:Element, index:number):void => {
    // Получаем индекс строки и столбца на основе индекса ячейки
    const row = Math.floor(index / 10); // 10 - количество ячеек в строке
    const col = index % 10;

    const cellState: CellState = matrixPlayer[row][col].state;

    // @ts-ignore
    cell.className = "state-" + cellState;
});
