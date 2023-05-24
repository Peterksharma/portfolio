//Tracks the mouse movement across the screen and logs the value
const parrallax_effectl = document.querySelectorAll(".movement")
const parrallax_effectr = document.querySelectorAll(".movementr")
//Name + Title
const nameTitle = document.querySelector(".about-me-name")
//Navigation
const hamburgerbtn = document.getElementById('hamburgerbtn')
const navigation = document.querySelector('.navigation')
//Navigation Links
const aboutMeLink = document.getElementById('aboutMeLink')
const projectsLink = document.getElementById('projectsLink')
const techStackLink = document.getElementById('techStackLink')
const resumeLink = document.getElementById('resumeLink')
const contactMeLink = document.getElementById('contactMelink')

const mainContent = document.querySelectorAll('.mainContent')
const aboutMeContent = document.querySelector('aboutMe')

const mainBox = document.querySelector('.displayBoxMain')

//Parallax Effect
let xValue = 0,
    yValue = 0;

window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parrallax_effectl.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-5% + ${-xValue * speedx}px)) translateY(calc(-5% + ${-yValue * speedy}px))`;
    })

    parrallax_effectr.forEach((el) => {
        let speedx1 = el.dataset.speedx1;
        let speedy1 = el.dataset.speedy1;
        el.style.transform = `translateX(calc(${(xValue - (window.innerWidth / 2)) * speedx1}px)) translateY(calc(${(yValue - (window.innerHeight / 2)) * speedy1}px))`;
    })
})

//Navigation


//Fade-out Effect 
hamburgerbtn.addEventListener('click', function() {
    navigation.classList.toggle('hidden');
    if (navigation.classList.contains('hidden')) {
        navigation.classList.add('fade-out');
    } else {
        navigation.classList.remove('fade-out');
    }
});

//Hiding the nameTitle
//About Me
aboutMeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        nameTitle.classList.add('hidden');
        setTimeout(function(){
            mainBox.style.animation = "none";
            mainBox.offsetHeight; //Trigggers a reflow, flushing the CSS elements
            mainBox.classList.remove('hidden');
            mainBox.style.animation = "fadeInBox 2s forwards"
        }, 1000);
    } 
})
//Projects
projectsLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        nameTitle.classList.add('hidden');
    } 
})
//Tech Stack
techStackLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        nameTitle.classList.add('hidden');
    } 
})
//Resume
resumeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        nameTitle.classList.add('hidden');
    } 
})
//Contact Me
contactMeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        nameTitle.classList.add('hidden');
    } 
})