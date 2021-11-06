const myDate = "1 May 2022";


function displayDate(){
	const myHoliday = new Date(myDate);
	const currentDate = new Date();

	const timeLeft = (myHoliday - currentDate)/1000;
	const secondsLeft = Math.floor(timeLeft)%60;
	const minutesLeft = Math.floor(timeLeft/60)%60;
	const hoursLeft = Math.floor(timeLeft/3600)%24;
	const daysLeft = Math.floor(timeLeft/3600/24);

	document.getElementById('days').innerHTML = daysLeft;
	document.getElementById('hours').innerHTML = formatTime(hoursLeft);
	document.getElementById('minutes').innerHTML = formatTime(minutesLeft);
	document.getElementById('seconds').innerHTML = formatTime(secondsLeft);
}

function formatTime(time){
	if(time<10) { return `0${time}`} else return time;
}
setInterval(displayDate, 1000);