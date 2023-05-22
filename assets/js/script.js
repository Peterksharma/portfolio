//Tracks the mouse movement across the screen and logs the value
const parrallax_effectl = document.querySelectorAll(".movement")
const parrallax_effectr = document.querySelectorAll(".movementr")
const hamburgerbtn = document.getElementById('hamburgerbtn')
const navigation = document.querySelector('.navigation')
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

function hideShowHamburgerBtn() {
    if (navigation.classList.contains('hidden')) {
        navigation.classList.remove('hidden')
    } else {
        navigation.classList.add('hidden')
    }
}

// hamburgerbtn.addEventListener('click', hideShowHamburgerBtn);

hamburgerbtn.addEventListener('click', function() {
    navigation.classList.toggle('hidden');
    if (navigation.classList.contains('hidden')) {
        navigation.classList.add('fade-out');
    } else {
        navigation.classList.remove('fade-out');
    }
});