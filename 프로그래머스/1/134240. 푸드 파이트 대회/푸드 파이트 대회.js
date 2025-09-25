
function solution(food) {
    let str = food.reduce((a, c, i) =>  a + String(i).repeat(Math.floor(c/2)),'');
    return str + '0' + str.split('').reverse().join('');
}