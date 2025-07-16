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
    if(s < -(2**31) || s > 2**31-1) return 0;
    return s;
};