function createElement(data) {
	const p = document.createElement('p');
	p.textContent = data;
	document.body.appendChild(p);
}

function queryWikipedia(callback) {
	const request = new XMLHttpRequest();
	const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

	request.open('GET', url, true);
	request.onload = function () {
		const response = JSON.parse(request.responseText);
		const page = Object.values(response.query.pages)[0];
		callback(page.extract)
	};
	request.send();
}

queryWikipedia(createElement);