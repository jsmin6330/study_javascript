var brandname;

class Food{
	constructor(name){
		this.name = name;
		this.brands = [];
	}
	addBrand(brand){
		this.brands.push(brand);
	}
	print(){
		console.log(`${this.name}을/를 파는 음식점들`);
		console.log(this.brands.join(','));
	}
}


class Pizza extends Food{
	constructor(){
		super('피자');
	}
}

class Chicken extends Food{
        constructor(){
                super('치킨');
        }
}

pizza = new Pizza();
pizza.addBrand("피자헛");
pizza.addBrand("도미노피자");

chicken = new Chicken();
chicken.addBrand("굽네치킨");
chicken.addBrand("교촌치킨");


pizza.print();
chicken.print();
/*chicken.print();*/
