const El = document.querySelectorAll('span');
const perc = document.getElementById('percent');
const loadEl = document.querySelectorAll('.container');
const list = ['tank'];
loadEl.forEach((item)=>{
	let percent = item.innerHTML;
	for(let j=0;j<100;j++){
		let node = document.createElement('span');
		node.style=`--i:${j}`
		if(percent>j){node.style.filter ='grayscale(0)'}
		item.appendChild(node);
	}
})



