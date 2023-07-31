//Tracks the mouse movement across the screen and logs the value
const parrallax_effectl = document.querySelectorAll(".movement")
const parrallax_effectr = document.querySelectorAll(".movementr")
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
const homeLink = document.getElementById('returnHome')
//Consts for the main content
const mainContent = document.querySelectorAll('.mainContent')
const aboutMeContent = document.getElementById('aboutMeContent')
const projects = document.getElementById('projects')
const techStack = document.getElementById('techStack')
const resume = document.getElementById('resume')

//Black Display Box for the main content data
const mainBox = document.querySelector('.displayBoxMain')

//Parallax Effect
let xValue = 0,
    yValue = 0;

    // Check if DeviceOrientationEvent is supported
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        let rotateDegrees = event.alpha;
        // gamma: left to right
        let leftToRight = event.gamma;
        // beta: front back motion
        let frontToBack = event.beta;

        // Here, you can use leftToRight and frontToBack values to apply a transform on your elements, similar to your previous mousemove parallax effect
        parrallax_effectl.forEach((el) => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            el.style.transform = `translateX(calc(-5% + ${-leftToRight * speedx}px)) translateY(calc(-5% + ${-frontToBack * speedy}px))`;
        });

        parrallax_effectr.forEach((el) => {
            let speedx1 = el.dataset.speedx1;
            let speedy1 = el.dataset.speedy1;
            el.style.transform = `translateX(calc(${leftToRight * speedx1}px)) translateY(calc(${frontToBack * speedy1}px))`;
        });
    }, true);
} else {
    
    // Fallback for browsers that don't support DeviceOrientationEvent
}

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

//functions to hide content to not overlap other content
function hideallthatisntAboutMeContent () {
    projects.classList.add('hidden');
}


function hideAllThatIsntProjects () {
    aboutMeContent.classList.add('hidden');
    techStackContainer.classList.add('hidden');
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

