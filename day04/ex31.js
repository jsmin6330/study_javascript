//Arrow function expression

//함수 본문이 한 줄인 경우 return과 중광호 값을 생략할 수 있습니다.
var func = x => x * x; //concise 바디
var func = (x, y) => {return x + y;};

//객체 리터럴을 반화할 때는 괄호로 꺼주세요.
var func = () => {foo: 1}; //undefined를 반환

var func = () => ({foo:1});


//줄 바꿈은 안됩니다. 문법 오류
//var func = ()
//=> 1;
