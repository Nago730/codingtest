const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [a, b] = input;

const arr = [...a].reverse().map(Number);
const targetArr = [...b].reverse().map(Number);

const maxLen = Math.max(arr.length, targetArr.length);

const merged = [];

for (let i = 0; i < maxLen; i++) {
    const curNum = merged[i] || 0;
    const n1 = arr[i] || 0;
    const n2 = targetArr[i] || 0;
    const sum = curNum + n1 + n2;

    if (sum < 10) {
        merged[i] = sum;
    } else {
        const onesDigit = sum % 10;
        const tensDigit = Math.floor(sum / 10);

        merged[i] = onesDigit;
        merged[i + 1] = tensDigit;
    }
}

const answer = merged.reverse().join('');

console.log(answer);
