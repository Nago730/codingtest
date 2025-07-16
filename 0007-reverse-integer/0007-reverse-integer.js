/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x >= 0 ? 1 : -1;
    x = x >= 0 ? x : -x;
    let answer = 0;
    while(x) {
        answer *= 10;
        answer += x % 10;
        x = Math.floor(x / 10);
        if (answer < -(2**31) || answer > 2**31 - 1) return 0;
    }
    return answer * sign;
};