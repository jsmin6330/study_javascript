//Arrow function expression

//Array.prototype.some
//배열을 순회하면 callback값에 하나라도 true가 있는 경우 true
//아니면 false를 반환

const array = [1, 2, 3, 4, 5];
console.log(array.some(n => n > 100));
console.log(array.some(n => n > 4));
