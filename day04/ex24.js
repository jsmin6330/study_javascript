//Destructuring assignment >> Array
//변수 교환
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a, b);

//일부 반환 값 무시
function f(){
	return [1, 2, 3];
}
const[a1, ,b1] = f();
console.log(a1, b1);

//나머지를 할당하기
let a2, b2, rest;
[a2, b2, ...rest] = [10, 20, 30, 40 , 50];
console.log(a2, b2, rest);


