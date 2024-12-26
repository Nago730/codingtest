// 햄버거 만들기
// 프로그래머스 1단계

function solution(ingredient) {
    let a = ingredient;
    let result = 0;
    if (a.length < 4) return 0;
    for (let i = 0; i < a.length - 3; i++) {
        if (a[i] === 1 && a[i + 1] === 2 && a[i + 2] === 3 && a[i + 3] === 1) {
            result++;
            a.splice(i, 4)
            i -= 3;
            if (i < 0) i = -1;
        }
    }
    return result;
}

// 더 빠른 풀이
// 속도 차이의 주요 원인:
// 배열 중간이 아닌 끝에서만 작업 (push/pop 작업이 splice보다 빠름)
// 인덱스 재조정이 필요 없음
// 원본 배열을 수정하지 않음
// 불필요한 반복 없음
// 스택 방식이 이 문제에서 더 효율적인 해결책👍
// 결론: splice로 원본 배열을 수정하면 수정한 뒷부분 배열의 인덱스가 모두 재조정 된다는 점에서 차이가 발생
function solution(ingredient) {
    let stk = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        stk.push(ingredient[i]);
        if (
            stk[stk.length-1] === 1 &&
            stk[stk.length-2] === 3 &&
            stk[stk.length-3] === 2 &&
            stk[stk.length-4] === 1
        ) {
            count++;
            stk.splice(-4);
        }
    }
    return count;
}
