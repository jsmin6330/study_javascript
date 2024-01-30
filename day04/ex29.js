//Destructuring assignment >Deeper


//함수 매개벼수로 전달된 객체에서 필드 가져오기
function userId({id}){
	return id;
}

function whois({
		displayName: displayName,
		fullName: {firstName: name}
})
{
	console.log(displayName + " is " + name);
}

const user = {
	id: 42, 
	displayName: "jdoe",
	fullName: {firstName: "john", lastName: "Doe"}
};
console.log("userId: " + userId(user));
whois(user);

