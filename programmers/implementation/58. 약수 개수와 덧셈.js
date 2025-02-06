// 약수 개수와 덧셈
// 플랫폼: Programmers
// 레벨: 1
// 유형: 수학, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 솔루션 코드
function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        answer += get(i);
    }
    
    return answer;
}

function get(n) {
    let divisor = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisor.push(i);
    }
    return divisor.length % 2 ? -n : n;
}