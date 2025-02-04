// 부족한 금액 계산하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 수학, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/82612

// 솔루션 코드
function solution(price, money, count) {
    let amount = 0;
    
    for (let i = 1; i <= count; i++) {
        amount += price * i;
    }
    
    return amount > money ? amount - money : 0;
}