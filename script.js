const sum = () => {
	let numberX = parseFloat(document.getElementById('numberX').value);
	let numberY = parseFloat(document.getElementById('numberY').value);
	let resultField = document.getElementById('numberZ');
	resultField.innerHTML = numberX + numberY;

	console.log(resultField.innerHTML);
	console.log(numberX + numberY);
};
