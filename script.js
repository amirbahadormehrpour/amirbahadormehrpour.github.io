document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
});

function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}

function showSkills() {
    flipCard();
    // Your logic to show skills content
}

function showExperience() {
    flipCard();
    // Your logic to show experience content
}

function showInfo() {
    flipCard();
    // Your logic to show info content
}
