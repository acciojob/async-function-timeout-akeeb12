//your JS code here. If required.

let innerInput = document.getElementById('text');
let delayInput = document.getElementById('delay');
let btn = document.getElementById('btn');

btn.document.addEventListener('click', async () =>{
	let text = textInput.value;
	let delay = delayInput.value;

	await new Promise (resolve => setTimeout(resolve, delay));

	outputDiv.textContent = text;
})