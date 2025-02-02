// 행렬의 덧셈
// 플랫폼: Programmers
// 레벨: 1
// 유형: 행렬, 2차원 배열
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12950

// 솔루션 코드
function solution(arr1, arr2) {
    return arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]));
}