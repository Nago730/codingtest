const phoneNumberMapping = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

let matrix;
let answer = [];

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    answer = [];
    matrix = [...digits].map(digit => phoneNumberMapping[digit]);
    if (!digits) return [];
    backTraking();
    return answer;
};

function backTraking(i = 0, path = []) {
    const digits = matrix[i];
    for (let j = 0; j < digits.length; j++) {
        path.push(digits[j]);
        if (matrix[i + 1]) {
            backTraking(i + 1, path);
        } else {
            answer.push(path.join(''));
            path.pop();
            continue;
        }
        path.pop();
    }
}
