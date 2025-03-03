// 2025 프로그래머스 코드챌린지 2차 예선 
// 택배 상자 꺼내기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/389478

// 솔루션 코드
function solution(n, w, num) {
    const arr = Array.from({ length: w }, (v, i) => {
        const column = [];
        for (let j = 1; j <= Math.floor(n / w) + 1; j++) {
            if (j % 2) {
                const cur = Math.floor(j / 2) * w * 2 + (i % w) + 1;
                if (cur <= n) column.push(cur);
            } else {
                const cur = Math.floor(j / 2) * w * 2 - (i % w);
                if (cur <= n) column.push(cur);
            }
        }
        return column;
    }).find(col => col.includes(num));
    return arr.length - arr.indexOf(num);
}