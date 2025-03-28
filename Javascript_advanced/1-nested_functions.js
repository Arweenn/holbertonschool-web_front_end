globalVariable = 'Welcome';

function outer() {
	alert(globalVariable);
	const course = 'Holberton';
	function inner() {
		alert(`${globalVariable} ${course}`);
		const exclamation = '!';
		function inception() {
			alert(`${globalVariable} ${course} ${exclamation}`);
		}
		inception();
	}
	inner();
}

outer();
