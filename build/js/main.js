"use strict";
class Coder {
	constructor(name, age, gender, lang) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.lang = lang;
		this.getAge = () => {
			console.log(`${this.name.toUpperCase()} age is ${this.age}`);
		};
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.lang = lang;
	}
}
const Dave = new Coder("dave", 40, "male", "english ");
Dave.getAge();
