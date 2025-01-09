// 과일 장수
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 솔루션 코드
function solution(k, m, score) {
    let result = 0;
    score.sort((a,b) => a - b);
    while(score.length >= m) {
        const box = [];
        for (let i = 0; i < m; i++) {
            box.push(score.pop());
        }
        result += Math.min(...box) * m;
    }
    return result;
}