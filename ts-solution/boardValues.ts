import matrix from "./placeShips.js";

const cells:NodeListOf<Element> = document.querySelectorAll('.board td');
console.log('test');

cells.forEach((cell:Element, index:number):void => {
    // Получаем индекс строки и столбца на основе индекса ячейки
    const row = Math.floor(index / 10); // 10 - количество ячеек в строке
    const col = index % 10;

    // @ts-ignore
    cell.className = "state-" + matrix[row][col].state;
    cell.addEventListener('click', (event: Event) => {
        if (cell.className == "state-1") {
            cell.className = "state-hit";
        }
    });

});