function changeMode(size, weight, transform, background, color) {
	return function () {
		document.body.style.fontSize = `${size}px`;
		document.body.style.font = weight;
		document.body.style.textTransform = transform;
		document.body.style.background = background;
		document.body.style.color = color;
	}
};

function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

	let paragraph = document.createElement('p');
	paragraph.textContent = "Welcome Holberton!";
	document.body.appendChild(paragraph);

	let spooky_btn = document.createElement('button');
	spooky_btn.textContent = "Spooky";
	spooky_btn.addEventListener("click", spooky);
	document.body.appendChild(spooky_btn);

	let darkMode_btn = document.createElement('button');
	darkMode_btn.textContent = "Dark mode";
	darkMode_btn.addEventListener("click", darkMode);
	document.body.appendChild(darkMode_btn);

	let screamMode_btn = document.createElement('button');
	screamMode_btn.addEventListener("click", screamMode);
	screamMode_btn.textContent = "Scream mode";
	document.body.appendChild(screamMode_btn);
};

main();