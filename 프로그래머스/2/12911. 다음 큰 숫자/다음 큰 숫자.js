function solution(n) {
    let k = n;
    const n의1개수 = 개수구하기(n);
    while (true) {
        k++;
        if (n의1개수 === 개수구하기(k)) return k;        
    }
}

function 개수구하기(n) {
    return [...String(n.toString(2))].filter(v => v == 1).length;
}