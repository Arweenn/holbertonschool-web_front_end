function countPrimeNumbers() {
	let counter = 0;
	for (let i = 2; i <= 100; i++) {
		let flag = 0;

		for (let x = 2; x < i; x++) {
			if (i % x === 0) {
				flag = 1;
				break;
			}
		}
		if (i > 1 && flag == 0)
			counter += 1;
	};
	return counter;
};

setTimeout(() => {
	const startTime = performance.now();
	for (let i = 0; i < 100; i++) {
		countPrimeNumbers();
	}
	const endTime = performance.now();
	console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds`);
});
