/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let OldVal;
    if(x < 0) OldVal = x;
    x = Math.abs(x);
    let s = 0;
    while(x >0) {
        let r = x%10;
        s = r + s*10;
        x = Math.floor(x/10);
    }
    if(OldVal < 0) s = -s;
    const initMin = -Math.pow(2, 31);
    const initMax = Math.pow(2, 31) - 1;
    if(s < initMin || s > initMax) return 0;
    return s;
};