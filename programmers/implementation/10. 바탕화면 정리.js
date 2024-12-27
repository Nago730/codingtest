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



// 2차원 배열 없이 풀어보기

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
// 스프레드 사용, 변수명 row, cell => arr, ch 로 변경.
// 결국엔 인덱스가 필요하기 때문에 배열로 바꾸는 게 좋기 때문임.
/* 
그 외 방법 : 
1. 카운터 변수 사용
2. 일반 for문 사용(인덱스 생김)
3. arr.entries 사용 -> 모든 요소에 대해 [index, value] 형태로 반환
*/