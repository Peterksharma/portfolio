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

//Consts for the main content
const mainContent = document.querySelectorAll('.mainContent')
const aboutMeContent = document.getElementById('aboutMeContent')
const projects = document.getElementById('projects')
const techStach = document.getElementById('techStack')
const resume = document.getElementById('resume')
const contactMe = document.getElementById('contactMe')

//Black Display Box for the main content data
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

//nameTitle Fade out with Box Fade In
function hideNameShowBox () {
    nameTitle.classList.add('hidden');
    setTimeout(function(){
        mainBox.style.animation = "none";
        mainBox.offsetHeight; //Trigggers a reflow, flushing the CSS elements
        mainBox.classList.remove('hidden');
        mainBox.style.animation = "fadeInBox 2s forwards"
    }, 1000);
}


//About Me, when clicked will hide the home screen and display the content box
aboutMeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
        setTimeout(function(){
            if (!mainBox.classList.contains('hidden')) {
                aboutMeContent.classList.remove('hidden')
            }
        }, 500)
    } else if (!aboutMeContent.classList.contains('hidden')){
        aboutMeContent.classList.add('hidden')
    } else {
        aboutMeContent.classList.remove('hidden')
        aboutMeContent.style.animation = "fadeIn 2s forwards"

    }
})

//Projects
projectsLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
    } 
})
//Tech Stack
techStackLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
    } 
})
//Resume
resumeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
    } 
})
//Contact Me
contactMeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
    } 
})