const hourNumber = document.getElementById('hours');
const minuteNumber = document.getElementById('minutes');
const secondNumber = document.getElementById('seconds');
const barHours = document.getElementById('arrHours');
const barMinutes = document.getElementById('arrMinutes');
const barSeconds = document.getElementById('arrSeconds');

/*
function genBar(limit) {
	let array = new Array;
	for (let i = 0; i < limit; i++) {
		let cell = ' ';
		array[i] = cell;
	}
	return array;
}


function updateBar(array, index) {
	for (let i = 0; i < array.length; i++) {
		array[i] = '#';
	}
}


// let bufHour = genBar(24);
// let bufMinute = genBar(60);
// let bufSecond = genBar(60);

barHours.innerText = genBar(24);
barMinutes.innerText = genBar(60);
barSeconds.innerText = genBar(60);

*/



function fillText(place, number) {
	place.innerText = '';
	for (let i = 0; i < number; i++) {
		place.innerText += '#';
	}
}


setInterval(setClock, 1000) 


function setClock() {
	const currentDate = new Date();
	const seconds = currentDate.getSeconds();
	const minutes = currentDate.getMinutes();
	const hours = currentDate.getHours();
//	console.log(currentDate);
	console.log(seconds);
	console.log(minutes);
	console.log(hours);
	hourNumber.innerText = hours;
	minuteNumber.innerText = minutes;
	secondNumber.innerText = seconds;
//	updateBar(bufHour, hours);
//	updateBar(bufMinute, minutes);
	fillText(barHours, hours);
	fillText(barMinutes, minutes);
	fillText(barSeconds, seconds);
//	updateBar(bufSecond, seconds);
}




















// const hourHand = document.querySelector('data-hour-hand');
// const minuteHand = document.querySelector('data-minute-hand');
// const secondHand = document.querySelector('data-second-hand');


// const hourHand = document.getElementById('hour');
// const minuteHand = document.getElementById('minute');
// const secondHand = document.getElementById('second');



// function setRotation(element, rotationRatio) {
// 	element.style.setProperty('--rotation', rotationRatio * 360)
// }

