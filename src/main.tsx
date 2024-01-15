class Coder {
	constructor(
		public readonly name: string,
		private age: number,
		public readonly gender: string,
		protected lang: string
	) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.lang = lang;
	}
	public getAge = () => {
		console.log(`${this.name.toUpperCase()} age is ${this.age}`);
	};
}

const Dave = new Coder("dave", 40, "male", "english ");
Dave.getAge();
