export function getCombination() {
    let combinations:number[][] = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            combinations.push([i, j]);
        }
    }

    return combinations;
}