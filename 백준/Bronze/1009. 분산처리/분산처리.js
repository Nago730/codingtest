const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input[0];
for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
        
    // 함수들을 인자로 받아 함수를 반환
    const pipe = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

    // 주기를 넣을 배열
    const table = [];
    // 숫자 마지막 자릿수 반환받기
    const getLastNumber = (n) => n % 10;
    // 숫자 a로 곱하기
    const multiply = (n) => n * a;
    // 제곱의 한 단계를 계산, 인자는 한 개만 가능
    const calc = pipe(multiply, getLastNumber);

    // 예시로 3^10 일 때를 생각해보자
    // 순서대로 3^n은 3 9 7 1 3 이니까 반복 주기는 4
    // 그럼 3^10승을 3^2승으로 계산해도 되는가?
    // 3^10은 마지막 자릿수가 순서대로 3971, 3971 후 3,9 이므로 3^2인 9이다.
    // 따라서 위 가설은 맞다

    // 계산되는 숫자의 마지막 값 저장 변수
    let num = a;
    // 테이블 구축
    for (let i = 0; i < b; i++) {
        if (i === 0) {
            table.push(getLastNumber(num));
            continue;
        }
        num = calc(num);
        // 계산된 값이 초기값이랑 같으면 주기 완성이므로 반복문 종료
        if(num === table[0]) break;
        // 초기값이랑 다르면 테이블에 삽입 후 계속 진행
        table.push(num);
    }


    const cycle = table.length;
    console.log(table[(b - 1) % cycle] || 10);
}
