class studentHogwarts {
	constructor() {
		this.privateScore = 0;
		this.name = null;
	}

	#changeScoreby(point) {
		this.privateScore += point;
	}

	setName(newName) {
		this.name = newName;
	}

	rewardStudent() {
		this.#changeScoreby(1);
	}

	penalizeStudent() {
		this.#changeScoreby(-1);
	}

	getScore() {
		return `${this.name}: ${this.privateScore}`;
	}
}

let harry = new studentHogwarts();
harry.name = "Harry";
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.name = "Draco";
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
