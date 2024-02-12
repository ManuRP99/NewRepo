const barHours = document.getElementById('arrHours');
const barMinutes = document.getElementById('arrMinutes');
const barSeconds = document.getElementById('arrSeconds');


const barHours1 = document.getElementById('arrHours1');
const barMinutes1 = document.getElementById('arrMinutes1');
const barSeconds1 = document.getElementById('arrSeconds1');







function fillWithT(place, number) {
	place.innerText = '~';
	for (let i = 0; i < number; i++) {
		place.innerText += '#';
//		console.log('test');
	}
	place.innerText += '~';
}



function setClock() {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const seconds = currentDate.getSeconds();
	fillWithT(barHours, hours);
	fillWithT(barHours1, hours);
	fillWithT(barMinutes, minutes);
	fillWithT(barMinutes1, minutes);
	fillWithT(barSeconds, seconds);
	fillWithT(barSeconds1, seconds);
//	console.log(hours);
//	console.log(minutes);
//	console.log(seconds);
}

setInterval(setClock, 1000)
