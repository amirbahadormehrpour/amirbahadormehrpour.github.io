body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    transition: background-color 0.5s, color 0.5s;
}

.light-theme {
    background-color: #f4f4f4;
    color: #333;
}

.dark-theme {
    background-color: #2c2c2c;
    color: #f4f4f4;
}

header {
    position: absolute;
    top: 10px;
    right: 10px;
}

#theme-toggle {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
}

.resume-container {
    text-align: center;
}

.resume-card {
    position: relative;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    margin-bottom: 20px;
}

.resume-card .front, .resume-card .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    background-color: #fff;
}

.light-theme .resume-card .front {
    background-color: #fff;
    color: #333;
}

.dark-theme .resume-card .front {
    background-color: #444;
    color: #f4f4f4;
}

.resume-card .front {
    z-index: 2;
}

.resume-card .back {
    transform: rotateY(180deg);
    z-index: 1;
}

.light-theme .resume-card .skills-back {
    background-color: #6a11cb;
    color: #fff;
}

.dark-theme .resume-card .skills-back {
    background-color: #2575fc;
    color: #fff;
}

.light-theme .resume-card .about-back {
    background-color: #ff6f00;
    color: #fff;
}

.dark-theme .resume-card .about-back {
    background-color: #ff8c00;
    color: #fff;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
}

.emoji-button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    transition: transform 0.3s ease;
}

.emoji-button.left {
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
}

.emoji-button.right {
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
}

.emoji-button.bottom {
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
}

.emoji-button:hover {
    transform: scale(1.1);
    animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
    to {
        transform: translate(0, -5px);
    }
}

.experience {
    margin-top: 20px;
    display: none;
    text-align: left;
}

#toggle-experience {
    margin-top: 20px;
}

@media (max-width: 600px) {
    .resume-card {
        width: 90%;
        height: auto;
    }
}
