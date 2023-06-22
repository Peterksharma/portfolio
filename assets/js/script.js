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
const techStackContainer = document.getElementById('techStackContainer')
const resumeLink = document.getElementById('resumeLink')
const contactMeLink = document.getElementById('contactMelink')
const homeLink = document.getElementById('returnHome')
//Consts for the main content
const mainContent = document.querySelectorAll('.mainContent')
const aboutMeContent = document.getElementById('aboutMeContent')
const projects = document.getElementById('projects')
const techStack = document.getElementById('techStack')
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

//nameTitle Fade out with Box Fade In
function hideNameShowBox () {
    nameTitle.classList.add('hidden');
    setTimeout(function(){
        mainBox.style.animation = "none";
        // mainBox.offsetHeight; //Trigggers a reflow, flushing the CSS elements
        mainBox.classList.remove('hidden');
        mainBox.style.animation = "fadeInBox 2s forwards"
    }, 1000);
    console.log('section 1')
}

//Fade-out Effect 
hamburgerbtn.addEventListener('click', function() {
    navigation.classList.toggle('hidden');
    if (navigation.classList.contains('hidden')) {
        console.log('section 1 hamburger')
    } else {
        navigation.classList.remove('fade-out');
    }
});

// Navigate Home
homeLink.addEventListener('click', function() {
    window.location.href = "../index.html";
    console.log('home button pressed')
});

console.log(homeLink)

//Functions to fade in content
function unhideAboutMeContent () {
    aboutMeContent.classList.remove('hidden');
    aboutMeContent.style.animation = "fadeIn 2s forwards"
}

function unhideProjects () {
    projects.classList.remove('hidden');
    projects.style.animation = "fadeIn 2s forwards"
}

function unhideTechStack () {
    techStackContainer.classList.remove('hidden');
    techStackContainer.style.animation = "fadeIn 2s forwards"
}

function unhideResume () {
    resume.classList.remove('hidden');
    resume.style.animation = "fadeIn 2s forwards"
}

function unhideContactMe () {
    contactMe.classList.remove('hidden');
    contactMe.style.animation = "fadeIn 2s forwards"
}

//functions to hide content to not overlap other content
function hideallthatisntAboutMeContent () {
    projects.classList.add('hidden');
    techStackContainer.classList.add('hidden');
    resume.classList.add('hidden');
    contactMe.classList.add('hidden');
}

function hideAllThatIsntTechStackContainer () {
    aboutMeContent.classList.add('hidden');
    projects.classList.add('hidden');
    resume.classList.add('hidden');
    contactMe.classList.add('hidden');
}

function hideAllThatIsntProjects () {
    aboutMeContent.classList.add('hidden');
    techStackContainer.classList.add('hidden');
    resume.classList.add('hidden');
    contactMe.classList.add('hidden');
}

function hideAllThatIsntResume () {
    aboutMeContent.classList.add('hidden');
    techStackContainer.classList.add('hidden');
    projects.classList.add('hidden');
    contactMe.classList.add('hidden');
}

function hideAllThatIsntContactMe () {
    aboutMeContent.classList.add('hidden');
    techStackContainer.classList.add('hidden');
    projects.classList.add('hidden');
    resume.classList.add('hidden');
}


//About Me, when clicked will hide the home screen and display the content box
aboutMeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
        unhideAboutMeContent ();
        console.log('stage 1')
    } else if (!aboutMeContent.classList.contains('hidden')){
        aboutMeContent.classList.add('hidden')
        console.log('stage 2')
    } else {
        hideallthatisntAboutMeContent ();
        unhideAboutMeContent ();
        console.log('stage 3')
    }
})

//Projects
projectsLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
        unhideProjects ();
        console.log('stage 4')
    } else if (!projects.classList.contains('hidden')){
        projects.classList.add('hidden')
        console.log('stage 5')
    } else {
        hideAllThatIsntProjects();
        unhideProjects();
        console.log('stage 6')
    }
})

//Tech Stack
techStackLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
        unhideTechStack ();
    } else if (!techStackContainer.classList.contains('hidden')){
        techStackContainer.classList.add('hidden')
        console.log('button 2')
    } else {
        hideAllThatIsntTechStackContainer ();
        unhideTechStack ();
        console.log('button 3')
    }
})
//Resume
resumeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
        unhideResume ();
    } else if (!resume.classList.contains('hidden')){
        resume.classList.add('hidden')
        console.log('button 2')
    } else {
        hideAllThatIsntResume ();
        unhideResume();
        console.log('button 3')
    }
})
//Contact Me
contactMeLink.addEventListener('click', function() {
    if (!nameTitle.classList.contains('hidden')) {
        hideNameShowBox ();
        unhideContactMe ();
    } else if (!contactMe.classList.contains('hidden')){
        contactMe.classList.add('hidden')
        console.log('button 2')
    } else {
        hideAllThatIsntContactMe ();
        unhideContactMe();
        console.log('button 3')
    }
})

