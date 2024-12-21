// 추억 점수
// 프로그래머스 1단계

function solution(name, yearning, photo) {
    const map = new Map();
    const answer = [];
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i])
    }
    for (const arr of photo) {
        let num = 0;
        arr.forEach(element => {
            if (map.get(element)) {
                num += map.get(element);
            }
        })
        answer.push(num);
    }
    return answer;
}

// 두번째 풀이
// map(), reduce(), Arrow함수, 삼항연산자 사용

function solution(name, yearning, photo) {
    return photo.map(arr => 
        arr.reduce((acc, cur) => acc + (yearning[name.indexOf(cur)] ?? 0), 0)
    );
}

// 화살표 함수에서 {} 사용시 return 필요
// 삼항연산자 사용시 조건식 ? 참일때 : 거짓일때
// 삼항연산자 대신 || 사용 가능. indexOf() 값 못찾으면 -1 반환, array[-1]는 undefined 반환