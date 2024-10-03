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
    document.getElementById("timer").innerHTML = 
        `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

    // If the countdown is finished, display a message
    if (gap < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "The Puja has started!";
    }
};
 // Select the elements
 const mobileMenu = document.getElementById('mobile-menu');
 const navLinks = document.getElementById('nav-links');

 // Add event listener to toggle the menu
 mobileMenu.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });
// Update the countdown every second
const timerInterval = setInterval(countdown, 1000);

/// JavaScript function to load and display the student list
function loadStudentList() {
    fetch('studentlist2024.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const madhyamikList = document.getElementById('madhyamik-list');
            const hsList = document.getElementById('hs-list');
            const graduationList = document.getElementById('graduation-list');
            const rows = data.split('\n').slice(1); // Skip the header row

            let madhyamikHTML = '', hsHTML = '', graduationHTML = '';

            rows.forEach((row, index) => {
                const columns = row.split(',');
                if (columns.length === 4) { // Assuming CSV has 4 columns: Name, Class, Section, Achievement
                    const studentInfo = `<li>${columns[0]} - ${columns[2]} (${columns[3]})</li>`;
                    
                    if (columns[1] === 'Madhyamik') {
                        madhyamikHTML += studentInfo;
                    } else if (columns[1] === 'HS') {
                        hsHTML += studentInfo;
                    } else if (columns[1] === 'Graduation') {
                        graduationHTML += studentInfo;
                    }
                }
            });

            madhyamikList.innerHTML = madhyamikHTML || '<li>No Madhyamik students available.</li>';
            hsList.innerHTML = hsHTML || '<li>No HS students available.</li>';
            graduationList.innerHTML = graduationHTML || '<li>No Graduation students available.</li>';
        })
        .catch(error => {
            console.error('Error loading student list:', error);
            document.querySelector('.student-list').innerHTML = '<p>Failed to load student list. Please try again later.</p>';
        });
}

document.addEventListener('DOMContentLoaded', loadStudentList);