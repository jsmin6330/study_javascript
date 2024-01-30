//Destructuring assignment > Object

//객체 구조 분해 할당
const {a1 = 10, b1 = 5} = {a1: 3};
console.log(a1, b1);

//기본값 갖는 새로운 이름의 변수에 할당
const{a:aa = 10, b:bb = 5} = {a:3};
console.log(aa, bb); 

//나머지 분해 할당
const {x, y, ...rest} = {x:10, y:20, z:30, zz:40};
console.log(x, y);
console.log(rest);
