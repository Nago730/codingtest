// 바탕화면 정리
// 프로그래머스 1단계

function solution(wallpaper) {
    const grid = wallpaper.map(v => v.split(''));
    let xCoords = [];
    let yCoords = [];
    grid.forEach((row, x) => {
        row.forEach((cell, y) => {
            cell === '#' ? (xCoords.push(x), yCoords.push(y)) : null;
        })  
    });
    return [
        Math.min(...xCoords),
        Math.min(...yCoords),
        Math.max(...xCoords) + 1,
        Math.max(...yCoords) + 1
    ];
} // p.s. ㅈㄴ 잘 풀었다 이차원 배열 없이도 풀어보자.
