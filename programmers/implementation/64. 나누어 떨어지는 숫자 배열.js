// 나누어 떨어지는 숫자 배열
// 플랫폼: Programmers
// 레벨: 1
// 유형: 배열
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12910

// 솔루션 코드
function solution(arr, divisor) {
    const answer = arr.sort((a, b) => a - b).reduce((a, c) => {
        if (c % divisor === 0) a.push(c);
        return a;
    }, []);
    return answer.length > 0 ? answer : [-1];
}