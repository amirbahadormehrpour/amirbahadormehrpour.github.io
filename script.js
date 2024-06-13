document.getElementById('skills-button').addEventListener('click', function() {
    document.querySelector('.resume-card .front').style.transform = 'rotateY(180deg)';
    document.querySelector('.resume-card .skills-back').style.transform = 'rotateY(0deg)';
});

document.getElementById('about-button').addEventListener('click', function() {
    document.querySelector('.resume-card .front').style.transform = 'rotateY(180deg)';
    document.querySelector('.resume-card .about-back').style.transform = 'rotateY(0deg)';
});

document.getElementById('back-to-front').addEventListener('click', function() {
    document.querySelector('.resume-card .front').style.transform = 'rotateY(0deg)';
    document.querySelector('.resume-card .skills-back').style.transform = 'rotateY(180deg)';
});

document.getElementById('back-to-front-about').addEventListener('click', function() {
    document.querySelector('.resume-card .front').style.transform = 'rotateY(0deg)';
    document.querySelector('.resume-card .about-back').style.transform = 'rotateY(180deg)';
});

document.getElementById('toggle-experience').addEventListener('click', function() {
    var exp = document.querySelector('.experience');
    if (exp.style.display === 'block') {
        exp.style.display = 'none';
        this.textContent = 'Show Experience';
    } else {
        exp.style.display = 'block';
        this.textContent = 'Hide Experience';
    }
});