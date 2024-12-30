// 완주하지 못한 선수
// 플랫폼: Programmers
// 레벨: 1
// 유형: 해쉬
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 솔루션 코드
function solution(participant, completion) {
    let answer;
    const map = new Map();
    for (const v of completion) {
        map.get(v) ? (map.set(v, map.get(v) + 1)) : (map.set(v, 1));
    }
    for (const v of participant) {
        if (map.get(v)) {
            map.set(v, map.get(v) - 1);
        } else {
            answer = v;
            break;
        }
    }
    return answer;
}

// 겉멋 코드
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
/* 분석하면서 많이 배움.
코드를 이해하기 요구되는 지식
1. 구문: find(callbackFn, thisArg)
   -> callbackFn: 배열의 각 요소에 대해 호출되는 함수
   -> thisArg: callbackFn에서 this로 사용할 값 (이 코드에선 this를 사용하지 않음)
      -> point1. thisArg가 먼저 실행되고, 그 결과를 callbackFn에 전달
      -> point2. 이 코드에서는 return된 결과는 신경쓰지 않고 map()을  실행시키는 용도로 씀.

2. 구문: map(callbackFn)
   -> 배열의 각 요소에 대해 callbackFn을 실행하고 새로운 배열을 반환
   -> 이 코드에서는 완주자 배열($)을 객체로 변환하는 용도로 사용
      -> point1. [name1, name2, name3] -> {name1: 1, name2: 1, name3: 1}

3. JavaScript의 배열과 객체
   -> 배열도 객체이므로 key:value 쌍으로 접근 가능
   -> arr['key'] 형태로 접근 시 없는 key는 undefined 반환
      -> point1. $[_]=($[_]|0)+1) 에서, $[_] 접근 시 없는 key는 undefined 반환.
      undefined|0 은 0으로 변환 후 1을 더해줌. 이름 중복 시에는 이미 존재하기 때문에 undefined가 아니라 존재하는 값에 1을 더하게 됨. (중복이름 처리 가능)

4. !$[_]-- 의 실제 동작 예시
   -> // 완주한 선수의 경우 ($[_]이 1일 때)
      $[_]-- // 1을 반환하고, 그 다음에 0으로 감소
      !1     // false를 반환 → find는 계속 진행
      
      // 완주하지 못한 선수의 경우 ($[_]이 undefined일 때)
      $[_]-- // undefined를 반환하고, NaN으로 변환
      !undefined // true를 반환 → find는 이 선수를 반환

5. 암시적 반환
   -> 함수의 반환값이 없는 경우, 함수는 암시적으로 undefined를 반환
   -> 이 코드에서는 find의 callbackFn 부분이 선수의 이름을 반환하면 truthy 값이 되므로 암시적 반환으로 최종 리턴됨.

코드 실행 순서
1. $.map(_=>$[_]=($[_]|0)+1) // find의 thisArg 부분
   -> ['a', 'b', 'c', 'c']를 ['a', 'b', 'c', 'c', 'a': 1, 'b': 1, 'c': 2]로 변환
2. _.find(_=>!$[_]--,$, thisArg) // find의 callbackFn 부분
3. find의 callbackFn 부분이 true를 반환하면 find는 해당 선수의 이름을 반환하고 종료
   -> !$[_]-- 
4. find에서 반환된 선수의 이름은 암시적 반환으로 solution에서 return됨.
   -> solution ((_,$) => 'find가 반환한 선수의 이름') 인 상태가 되면,
      solution () {return 'find가 반환한 선수의 이름';} 과 같은 상태인 것임.
      따라서 최종 리턴임.
*/

// 깔끔한 코드 ##강추
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}