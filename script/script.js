const barHours = document.getElementById('arrHours');
const barMinutes = document.getElementById('arrMinutes');
const barSeconds = document.getElementById('arrSeconds');

function fillWithT(place, number) {
	place.innerText = '';
	for (let i = 0; i < number; i++) {
		place.innerText += '#';
//		console.log('test');
	}
}



function setClock() {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const seconds = currentDate.getSeconds();
	fillWithT(barHours, hours);
	fillWithT(barMinutes, minutes);
	fillWithT(barSeconds, seconds);
//	console.log(hours);
//	console.log(minutes);
//	console.log(seconds);
}

setInterval(setClock, 1000)
