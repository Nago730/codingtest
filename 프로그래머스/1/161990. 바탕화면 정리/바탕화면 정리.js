
function solution(wallpaper) {
    let xCoords = [];
    let yCoords = [];
    wallpaper.forEach((arr, x) => {
        [...arr].forEach((ch, y) => {
            ch === '#' ? (xCoords.push(x), yCoords.push(y)) : null;
        })  
    });
    return [
        Math.min(...xCoords),
        Math.min(...yCoords),
        Math.max(...xCoords) + 1,
        Math.max(...yCoords) + 1
    ];
}