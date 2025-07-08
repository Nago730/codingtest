function solution(s){
    // s를 배열로 분해
    // 배열을 순회하며 '('를 만나면 count++ ')'를 만나면 count--
    // count가 마이너스가 되면 return false
    // 순회가 끝난 후 count !== 0 이면 return false
    const arr = s.split('');
    let count = 0;
    for (const v of arr) {
        if (v === '(') count++;
        else count--;
        if (count < 0) return false;
    }
    if (count !== 0) return false;
    return true;
}