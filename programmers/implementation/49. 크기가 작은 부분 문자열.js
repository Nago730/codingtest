// 삼총사
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 솔루션 코드
function solution(t, p) {
    let result = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        if (+t.slice(i, i + p.length) <= +p) result++;
    }
    return result;
}