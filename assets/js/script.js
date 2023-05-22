//Tracks the mouse movement across the screen and logs the value
const parrallax_effectl = document.querySelectorAll(".movement")
const parrallax_effectr = document.querySelectorAll(".movementr")

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
        el.style.transform = `translateX(calc(5% + ${xValue * speedx1}px)) translateY(calc(5% + ${yValue * speedy1}px))`;
    })
})