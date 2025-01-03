// 옹알이 (2)
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 솔루션 코드
const solution = b => b.filter(v => /^(?!.*?(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/.test(v)).length;

// 부정적 전방탐색을 if문으로 처리
function solution(babbling) {
    return babbling.filter(v => {
        if(/(aya|ye|woo|ma)\1/.test(v)) return false;
        return /^(aya|ye|woo|ma)+$/.test(v)
    }).length;
}

/*
정규표현식 분석: /^(?!.*?(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/

1. 패턴 요소 설명
^ : 문자열 시작
$ : 문자열 끝
(?!...) : 부정적 전방탐색 (if not 조건문)
.*? : 임의의 위치에서 검사 시작 (0개 이상의 문자)
(aya|ye|woo|ma) : 허용되는 발음 패턴 그룹
\1 : 첫 번째 그룹과 동일한 패턴 참조
+ : 1회 이상 반복

2. 패턴 설계 아이디어 순서
a) 기본 발음 패턴 정의
   - (aya|ye|woo|ma) : 허용되는 발음들을 그룹으로 정의

b) 연속 발음 체크 로직 추가
   - (패턴)\1 : 같은 패턴이 연속되는 경우를 찾음
   - .*? : 문자열 내 어느 위치에서든 검사할 수 있게 함
   - (?!...) : 연속 패턴이 있으면 거부하는 조건 추가

c) 전체 문자열 검증
   - ^ : 시작 위치 고정
   - $ : 끝 위치 고정
   - + : 패턴이 1회 이상 반복되어야 함

3. 동작 방식
a) (?!.*?(aya|ye|woo|ma)\1) 부분
   - 문자열 전체를 검사하며
   - 동일한 발음이 연속되는 부분이 있는지 확인
   - 있으면 false 반환 (부정적 전방탐색)

b) (aya|ye|woo|ma)+ 부분
   - 실제로 문자열이 허용된 발음들의 조합인지 확인
   - 한 개 이상의 발음으로 구성되어야 함

4. 매칭 예시
성공 케이스:
- "aya" : 단일 패턴
- "ayawoo" : 서로 다른 패턴 연속
- "wooyema" : 여러 패턴 조합

실패 케이스:
- "ayaaya" : 같은 패턴(aya) 반복
- "yeye" : 같은 패턴(ye) 반복
- "abc" : 허용되지 않은 패턴
*/