function solution(n, arr1, arr2) {
    const str1 = convert(n, arr1);
    const str2 = convert(n, arr2);
    const result = new Array(n).fill(['']);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (str1[i].at(j) === '#') {
                result[i] += '#';
                continue;
            } else if (str2[i].at(j) === '#') {
                result[i] += '#';
                continue;
            }
            result[i] += ' ';
        }
    }
    return result;
}

function convert(n, arr) {
    const strarr = arr.map(v => {
        let str = '';
        for (let i = n - 1; i >= 0; i--) {
            if (v - 2 ** i >= 0) {
                v -= 2 ** i;
                str += '#';
            } else {
                str += ' ';
            }
        }
        return str;
    });
    return strarr;
}