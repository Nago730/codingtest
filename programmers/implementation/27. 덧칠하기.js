// 덧칠하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/161989

// 솔루션 코드
function solution(n, m, section) {
    let result = 0;
    const wall = new Array(section[section.length - 1]).fill(false);
    section.forEach(v => wall[v] = true);
    for (let i = 0; i < wall.length; i++) {
        if (wall[i]) {
            for (let j = i; j < i + m; j++) {
                if (wall[j]) wall[j] = false;
            }
            result++;
        }
    }
    return result;
}