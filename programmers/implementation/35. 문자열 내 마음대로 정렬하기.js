// 문자열 내 마음대로 정렬하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12915

// 솔루션 코드
function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a.at(n).charCodeAt() === b.at(n).charCodeAt()) {
            const len = Math.min(a.length, b.length);
            for (let i = 0; i < len; i++) { 
                if (a.at(i).charCodeAt() != b.at(i).charCodeAt()) {
                    return a.at(i).charCodeAt() - b.at(i).charCodeAt()
                }
            }
            return len === a.length ? -1 : 1;
        }
        return a.at(n).charCodeAt() - b.at(n).charCodeAt();
    });
}

// 솔루션 코드 2
function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}
