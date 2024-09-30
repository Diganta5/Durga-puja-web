// Countdown Timer Function
const countdown = () => {
    // Set the date of Durga Puja
    const countDate = new Date("October 08, 2024 00:00:00").getTime();

    // Get current time
    const now = new Date().getTime();

    // Find the difference between now and the event date
    const gap = countDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysLeft = Math.floor(gap / day);
    const hoursLeft = Math.floor((gap % day) / hour);
    const minutesLeft = Math.floor((gap % hour) / minute);
    const secondsLeft = Math.floor((gap % minute) / second);

    // Display the result in the element with id="timer"
    const timerDisplay = document.getElementById("timer");
    if (gap >= 0) {
        timerDisplay.innerHTML = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    } else {
        clearInterval(timerInterval);
        timerDisplay.innerHTML = "The Puja has started!";
    }
};

// Update the countdown every second
const timerInterval = setInterval(countdown, 1000);

// Select the elements for the mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Add event listener to toggle the mobile menu
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    mobileMenu.setAttribute('aria-expanded', isExpanded);  // Accessible toggle
});
