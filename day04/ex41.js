//Arrow function expression

//Array.prototype.every
//callback의 결과값이 모두 true인 경우 true, 아니면 false를 반환
const array = [1, 2, 3, 4, 5];
console.log(array.every(n => n > 0));
console.log(array.every(n => n > 4));
