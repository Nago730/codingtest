function solution(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
         if (isPrime[i]) {
             for (let j = 2 * i; j <= n; j += i) {
                 isPrime[j] = false;
             }
         }
    }
    return isPrime.filter(Boolean).length;
}