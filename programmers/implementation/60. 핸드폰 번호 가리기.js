// 핸드폰 번호 가리기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리(정규표현식)
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12948

// 솔루션 코드
// 솔루션 1
function solution(phone_number) {
    return '*'.repeat([...phone_number].length - 4) + phone_number.slice(phone_number.length - 4);
}

// 솔루션 2
function solution(phone_number) {
    const num = phone_number.match(/\d{4}$/);
    return '*'.repeat(phone_number.length - 4) + num;
}

// 솔루션 3
function solution(s) {
    return s.replace(/\d(?=\d{4})/g,'*');
}