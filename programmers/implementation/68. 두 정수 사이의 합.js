// 두 정수 사이의 합
// 플랫폼: Programmers
// 레벨: 1
// 유형: 수학, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12912

// 솔루션 코드
function solution(a, b) {
    let [min, max] = [Math.min(a, b), Math.max(a, b)];
    if (max > 0 && min < 0) {
        if (max > -min) min = -min + 1;
        else if (max < -min) [min, max] = [min, -max - 1];
    }
    let answer = 0;
    for (let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}