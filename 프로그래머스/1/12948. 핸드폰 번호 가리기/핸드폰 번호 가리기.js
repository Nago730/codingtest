function solution(s) {
    return s.replace(/\d(?=\d{4})/g,'*');
}