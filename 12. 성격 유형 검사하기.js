// 성격 유형 검사하기
// 프로그래머스 1단계

function solution(survey, choices) {
    let char = {
        R: 0,        T: 0,
        C: 0,        F: 0,
        J: 0,        M: 0,
        A: 0,        N: 0,
    }
    let val = {
        1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3
    }
    survey.forEach((v, idx) => {
        const [a, b] = v.split('');
        const num = choices[idx];
        if (/[123]/.test(num)) {
            char[a] += val[String(num)];
        } else if (/[567]/.test(num)) {
            char[b] += val[String(num)];            
        }
    });
    const result = (char.R >= char.T ? 'R' : 'T') +
                   (char.C >= char.F ? 'C' : 'F') +
                   (char.J >= char.M ? 'J' : 'M') +
                   (char.A >= char.N ? 'A' : 'N')
    return result;
}