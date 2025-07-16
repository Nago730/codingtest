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

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const answer = [];
    const matrix = [...digits].map(digit => phoneNumberMapping[digit]);
    
    function backTraking(idx, path) {
        if (idx === matrix.length) {
            answer.push(path.join(''))
            return;
        }

        const letters = matrix[idx];

        for (const letter of letters) {
            path.push(letter);
            backTraking(idx + 1, path);
            path.pop();
        }
    }
    
    backTraking(0, []);
    return answer;
};