const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const resistorColors = {
    black:  { value: 0, multiplier: 1 },
    brown:  { value: 1, multiplier: 10 },
    red:    { value: 2, multiplier: 100 },
    orange: { value: 3, multiplier: 1000 },
    yellow: { value: 4, multiplier: 10000 },
    green:  { value: 5, multiplier: 100000 },
    blue:   { value: 6, multiplier: 1000000 },
    violet: { value: 7, multiplier: 10000000 },
    grey:   { value: 8, multiplier: 100000000 },
    white:  { value: 9, multiplier: 1000000000 },
};

const getValue = (color) => resistorColors[color].value;
const getMultiplier = (color) => resistorColors[color].multiplier;
const addString = (a, b) => a + '' + b;

const [c1, c2, c3] = input.map((c, i) => i < 2 ? getValue(c) : getMultiplier(c))

const answer = addString(c1, c2) * c3;

console.log(answer);

