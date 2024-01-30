//Destructuring assignment

//선언에서 분리한 할당
let a, b;
[a,b] = [1,2];
console.log(a, b);

//할당값이 undefine일 경우
const [a1 = 5, b1 = 7, c1 = 9] = [1, null];
console.log(a1, b1, c1);

