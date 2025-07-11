function solution(n) {
    return fibo(n) % 1234567;
}

function fibo(n) {
    const arr = [0, 1];
    let i = 2;
    while (!arr[n]) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
        i++;
    }
    return arr[n];
}