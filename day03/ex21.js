function f(a, b, ...rest){
	console.log(a, b, rest);
}

f(1, 2, 3);
// ...은 항상 배열로 반환된다.
