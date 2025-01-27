// 폰켓몬
// 플랫폼: Programmers
// 레벨: 1
// 유형: 해쉬
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 솔루션 코드 (문제 의도에 부합한 코드)
function solution(nums) {
    const map = new Map();
    nums.forEach(v => {
        if (!map.has(v)) map.set(v, true);
    });
    return map.size > nums.length / 2 ? nums.length / 2 : map.size;
}

// 효율적인 코드 (해시 문제의 의도에는 적합하지 않음)
function solution(nums) {
    const max = nums.length / 2;
    const arr = new Set(nums);
    return arr.size > max ? max : arr.size;
}
