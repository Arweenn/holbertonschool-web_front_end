function welcome(firstName, lastName) {
	let fullname = `${firstName} ${lastName}`;

	function displayFullName() {
		alert(`Welcome ${fullname} !`);
	};

	displayFullName();
}