// 예산
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12982

// 솔루션 코드
function solution(d, budget) {
    return d.sort((a, b) => a - b).filter(v => {
        if (budget >= v) {
            budget -= v;
            return true;
        }
    }).length;
}