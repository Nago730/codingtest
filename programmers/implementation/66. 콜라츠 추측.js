// 콜라츠 추측
// 플랫폼: Programmers
// 레벨: 1
// 유형: 수학, 재귀
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 솔루션 코드
function solution(num, count = 0) {
    if (num === 1) return count;
    if (count > 500) return -1;
    return solution(num % 2 === 0 ? num / 2 : num * 3 + 1, count + 1);
}