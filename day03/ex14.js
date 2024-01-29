function calDefaultValue(a = 1, b = a == 1 ? 2 : 3){
	console.log(a, b);
}

calDefaultValue(1);
calDefaultValue(2);
