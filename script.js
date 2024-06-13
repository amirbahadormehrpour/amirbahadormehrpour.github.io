function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');

    const front = document.querySelector('.front');
    const backSkills = document.querySelector('.back.skills');
    const backInfo = document.querySelector('.back.info');
    const backExperience = document.querySelector('.back.experience');

    if (body.classList.contains('light-theme')) {
        front.style.backgroundColor = '#f0f0f0';
        front.style.color = '#000';
        backSkills.style.backgroundColor = '#5dade2'; // Light Blue
        backInfo.style.backgroundColor = '#f39c12'; // Light Orange
        backExperience.style.backgroundColor = '#bb8fce'; // Light Purple
    } else {
        front.style.backgroundColor = '#333';
        front.style.color = '#fff';
        backSkills.style.backgroundColor = '#2980b9'; // Blue
        backInfo.style.backgroundColor = '#e67e22'; // Orange
        backExperience.style.backgroundColor = '#8e44ad'; // Purple
    }
}

function showSkills() {
    const card = document.querySelector('.card');
    card.classList.add('flip');
    setTimeout(() => {
        document.querySelector('.skills').style.display = 'block';
        document.querySelector('.info').style.display = 'none';
        document.querySelector('.experience').style.display = 'none';
    }, 400);
}

function showInfo() {
    const card = document.querySelector('.card');
    card.classList.add('flip');
    setTimeout(() => {
        document.querySelector('.info').style.display = 'block';
        document.querySelector('.skills').style.display = 'none';
        document.querySelector('.experience').style.display = 'none';
    }, 400);
}

function showExperience() {
    const card = document.querySelector('.card');
    card.classList.add('flip');
    setTimeout(() => {
        document.querySelector('.experience').style.display = 'block';
        document.querySelector('.skills').style.display = 'none';
        document.querySelector('.info').style.display = 'none';
    }, 400);
}

function goBack() {
    const card = document.querySelector('.card');
    card.classList.remove('flip');
    setTimeout(() => {
        document.querySelector('.skills').style.display = 'none';
        document.querySelector('.info').style.display = 'none';
        document.querySelector('.experience').style.display = 'none';
    }, 400);
}
