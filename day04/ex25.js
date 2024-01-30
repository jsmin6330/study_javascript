//Destructuring assignment > Object

//객체 구조 분해 할당
const o = {p:42, q: true};
const {p, q} = o;
console.log(p, q);

//선언에서 분리한 할당
let a, b;
//{a, b} = {a:1, b:2};
//Unexpected token, 코드 블럭으로 간주하기 때문에 표현식이 되도록 관호로 감싸주기
({a, b} = {a:1, b:2});
console.log(a,b);

//새로운 변수 이름으로 할당
const x = {y:42, z: true};
const {y: foo, z: bar} = x;
console.log(foo, bar);
