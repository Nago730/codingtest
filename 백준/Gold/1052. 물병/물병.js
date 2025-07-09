const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b] = input.map(Number);

const calcExponent = (n) => {
    // 10^7보다 작으면서 가장 큰 2의 거듭제곱은 2^26
    const maxExponent = 26;
    for (let i = 0; i <= maxExponent; i++) {
        if (n <= 2**i) return i;
    }
    return maxExponent;
}

let n = a;
const k = b;
let count = 0;
let lastExponent;

for (let i = calcExponent(n); i >= 0; i--) {
    // n이 2^i 보다 작으면 continue
    if (n < 2**i) continue;
    // n이 2^i보다 크거나 같으면 물병 하나 완성
    else if (n >= 2**i) {
        count++;
        n-= 2**i;
        lastExponent = i;
        // 물병 완성 후 남은 물이 0이고 count가 k보다 작을 때,
        // a가 b보다 작거나 같으면 차를 출력
        if (n === 0 && count < k) {
            console.log(0);
            break;
        }

        // 남은 물이 0이 아니라면 count가 k보다 작은지 확인
        // count가 k보다 작으면 진행, 같으면 상점에서 살 물의 개수를 구해야함
        if (n !== 0 && count < k) continue;
        else if (n !== 0 && count < k && n < 2**i) continue;
        else if (n !== 0 && count === k) {
            console.log(2**lastExponent - n);
            break;
        }
        else if (n === 0 && count === k) {
            console.log(0);
            break;
        }
    }
}
