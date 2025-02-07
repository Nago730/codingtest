// 제일 작은 수 제거하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12935

// 솔루션 코드
function solution(arr) {
    let min = arr[0];
    let minIdx = 0;
    arr.forEach((v, i) => {
        if (v < min) {
            min = v;
            minIdx = i;
        }
    });
    arr.splice(minIdx, 1);
    return arr.length === 0 ? [-1] : arr;
}