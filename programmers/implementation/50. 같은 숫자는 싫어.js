// 같은 숫자는 싫어
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 솔루션 코드
function solution(arr) {
    let last;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== last) newArr.push(arr[i]);
        last = arr[i];
    }
    return newArr;
}

// 다른 풀이
function solution(arr) {
    return arr.filter((v, i) => v !== arr[i + 1]);
}

// 겉멋 한줄

const solution = a => a.filter((v, i) => v !== a[i + 1]);