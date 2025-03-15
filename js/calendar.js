const targetDate = new Date('February 14, 2025 07:41:00').getTime();
const targetDate2 = new Date('August 30, 2022 21:20:00').getTime();
const countdownElement = document.getElementById('countdown');
const countdownElement2 = document.getElementById('countdown2');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - targetDate;

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <div class="time-unit">${years} Years</div>
        <div class="time-unit">${months} Months</div>
        <div class="time-unit">${days} Days</div>
        <div class="time-unit">${hours} Hours</div>
        <div class="time-unit">${minutes} Minutes</div>
        <div class="time-unit">${seconds} Seconds</div>
    `;
}

function updateCountdown2() {
    const now = new Date().getTime();
    const distance2 = now - targetDate2;

    const years = Math.floor(distance2 / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((distance2 % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance2 % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const minutes = Math.floor((distance2 % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

    countdownElement2.innerHTML = `
        <div class="time-unit">${years} Years</div>
        <div class="time-unit">${months} Months</div>
        <div class="time-unit">${days} Days</div>
        <div class="time-unit">${hours} Hours</div>
        <div class="time-unit">${minutes} Minutes</div>
        <div class="time-unit">${seconds} Seconds</div>
    `;
}

setInterval(updateCountdown, 1000);
setInterval(updateCountdown2, 1000);