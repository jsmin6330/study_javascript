//Arrow function expression

//Array.prototype.sort
//배열을 정렬해서 새로운 배열을 반환합니다.
//이 때 비교함수를 callback으로 넣어서 정렬 결과를 조정할 수 있습니다.

const array = [100, 6, 89, 34, 0, 1];
console.log(array.sort()); //유니코드 포인트 순서에 따라 문자열처럼 처리
console.log(array.sort((a,b) => a - b));
