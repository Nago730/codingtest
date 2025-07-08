function solution(s) {
    return s.split(' ').map(str => [...str].map((v, i) => i ? v.toLowerCase() : v.toUpperCase()).join('')).join(' ');
}