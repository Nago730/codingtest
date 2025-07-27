function solution(k, tangerine) {
    const arr = [];
    tangerine.forEach(cur => {
        if (arr[cur]) arr[cur] = arr[cur] + 1;
        else arr[cur] = 1;
    });
    const newArr = arr.filter(Boolean).sort((a, b) => b - a);
    let answer = 0;
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (count < k) {
            count += newArr[i];
            answer++;
        }
        else break;
    }
    return answer;
}