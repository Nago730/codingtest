// 가장 가까운 글자
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/142086

// 솔루션 코드
function solution(s) {
    const obj = {};
    return s.split('').reduce((a, c, i) => {
        obj[c] !== undefined ? a.push(i - obj[c]) : a.push(-1);
        obj[c] = i;
        return a;
    }, []);
}