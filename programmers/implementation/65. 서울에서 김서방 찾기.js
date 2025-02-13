// 서울에서 김서방 찾기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 배열
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12919

// 솔루션 코드
function solution(seoul) {
    return "김서방은 " + seoul.reduce((a, c, i) => c === "Kim" ? i : a, 0) + "에 있다";
}