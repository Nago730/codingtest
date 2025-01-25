// 최소직사각형
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 솔루션 코드
function solution(sizes) {
    const size = {'max': 0, 'min': 0};
    sizes.forEach(v => {
        if (Math.max(...v) > size.max) size.max = Math.max(...v);
        if (Math.min(...v) > size.min) size.min = Math.min(...v);
    });
    return size.max * size.min;
}