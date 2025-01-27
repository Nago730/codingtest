// 2016년
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12901

// 솔루션 코드
function solution(a, b) {
    const md = {1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31};
    const day = {0: 'FRI', 1: 'SAT', 2: 'SUN', 3: 'MON', 4: 'TUE', 5: 'WED', 6: 'THU'};
    let days = 0;

    for (let i = 2; i <= a; i++) {
        days += md[i - 1];
    }
    days += b - 1;

    return day[days % 7];
}