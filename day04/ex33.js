//Arrow function expression

//함수 본문이 2줄 이상인 경우 { } 로 감싸야 한다.
(iterator, nedles) => {
	for(let o of needles){
		if(iterator.indexOf(o) === -1) return false;
	}
	return true;
}

//{}로 감싼 경우 값을 반화하려면 본문 줄 수에 상관없이 return keyword를 사용해야 한다.
const f = a => {return a};
const f2 = a => {a}; //undefined
