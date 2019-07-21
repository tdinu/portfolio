// modal clock (1)
const secondsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    //console.log(secondsDegrees, minutesDegrees);

    if (secondsDegrees === 90) {
        secondsHand.style.transition = 'all 0.0s';
    } else {
        secondsHand.style.transition = 'all 0.5s cubic-bezier(0.165, 2.84, 0.44, 1);'
    }
}

setInterval(setDate, 1000);