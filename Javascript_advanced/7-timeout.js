console.log("Start of the execution queue");
setTimeout(() => {
	console.log("Final code block to be executed")
}, 0);
for (let i = 1; i < 101; i++) {
	console.log(i);
}
console.log("End of the loop printing");